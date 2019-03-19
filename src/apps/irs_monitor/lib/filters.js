import {get} from 'lodash'

export function filter_responses(responses, filters = []) {
  if (filters.length === 0) return responses

  const filter_fn = compose_filter_function(filters)
  const filter_names = filters.map(f => f.name)

  // Loop over every response
  // `for` loop is faster by 10x than Array#filter
  let output = []
  for (let i = 0; i < responses.length; i++) {
    let response = responses[i]

    // Run composed filter against response, and keep response if true
    if (filter_fn(response)) output.push(response)
  }
  return output
}

function compose_filter_function(filters) {
  const is_spatial_function = f => f.name.includes('location.selection.category') || f.name.includes('location.selection.id')

  const spatial_fns = filters.filter(is_spatial_function).map(filter_function)
  const other_fns = filters.filter(f => !is_spatial_function(f)).map(filter_function)

  return (response) => {

    // fns.some creates an OR query: needed for spatial filters
    // fns.every creates an AND query: needed for everything apart from spatial filters
    return other_fns.every(fn => {
      return fn.call(this, response)
    }) && spatial_fns.some(fn => {
      return fn.call(this, response)
    })
  }
}

function filter_function({name, comparator, value}) {
  const accepted_comparators = ['equals', '>=', '<=', '>', '<', 'not_equals']
  if (accepted_comparators.indexOf(comparator) < 0) throw new Error(`Unsupported comparator ${comparator}`)

  switch (name) {
    case 'recorded_on':
      return day_comparison_function({name, comparator, value})
    default:
      return standard_comparison_function({name, comparator, value})
  }
}


function standard_comparison_function({name, comparator, value}) {
  switch (comparator) {
    case "equals":
      return (response) => prep_for_comparison(get(response, name)) === prep_for_comparison(value)
    case ">=":
      return (response) => prep_for_comparison(get(response, name)) >= prep_for_comparison(value)
    case "<=":
      return (response) => prep_for_comparison(get(response, name)) <= prep_for_comparison(value)
    case "<":
      return (response) => prep_for_comparison(get(response, name)) < prep_for_comparison(value)
    case ">":
      return (response) => prep_for_comparison(get(response, name)) > prep_for_comparison(value)
    case "not_equals":
      return (response) => prep_for_comparison(get(response, name)) !== prep_for_comparison(value)
  }
}

function prep_for_comparison(value) {
  if (typeof value !== 'string') return value;
  return value.toLowerCase()
}

function day_comparison_function({name, comparator, value}) {
  switch (comparator) {
    case "equals":
      return (response) => convert_datetime_to_days(get(response, name)) === convert_datetime_to_days(value)
    case ">=":
      return (response) => convert_datetime_to_days(get(response, name)) >= convert_datetime_to_days(value)
    case "<=":
      return (response) => convert_datetime_to_days(get(response, name)) <= convert_datetime_to_days(value)
    case "<":
      return (response) => convert_datetime_to_days(get(response, name)) < convert_datetime_to_days(value)
    case ">":
      return (response) => convert_datetime_to_days(get(response, name)) > convert_datetime_to_days(value)
    case "not_equals":
      return (response) => convert_datetime_to_days(get(response, name)) !== convert_datetime_to_days(value)
  }
}

function convert_datetime_to_days(datetime) {
  const millis_in_a_day = 86400000
  // TODO: @refac Find another way to convert string to int in getTime
  return Math.floor(new Date(datetime).getTime() / millis_in_a_day) // filter_value_in_days
}
