import BUILD_TIME from 'config/build-time'

export default {
  api: {
    // Standard DOUMA API
    url: BUILD_TIME.BRANCH === 'master' ? 'https://douma.api.disarm.io' : 'https://douma-stage.api.disarm.io',
    //  url: 'http://localhost:3000',
    version: 'v7',

    // Currently not used
    WEATHER_API_URL: 'https://weather.api.disarm.io/processor/output',
    R_SERVER_URL: 'https://cluster.api.disarm.io'
  },
  applets: {
    // The order here is irrelevant to sidebar - that is currently fixed by the user auth/permissions sheet,
    // but should set by instance_config.json
    'irs_record_point': { title: 'IRS Record', icon: 'assignment', geodata_required: false },
    'irs_plan': { title: 'IRS Plan', icon: 'assignment_turned_in', geodata_required: true },
    'irs_monitor': {
      title: 'IRS Monitor',
      icon: 'dashboard',
      geodata_required: true,
      replace_null_key_with: 'unknown',
      defaults: { temporal_aggregation_level: 'week' },
      limit_to_options: ['all', 'responses', 'plan'],
      chart_layout_defaults: { // plotlyjs
        legend: { "x": 1, y: 0, bgcolor: 'rgba(234, 234, 234, 0.79)' }
      }
    },
    'irs_tasker': { title: 'IRS Tasker', icon: 'group', geodata_required: true },
    'debug': { title: 'Debug', icon: 'bug_report', geodata_required: true },
    // Meta below is currently ignored in sidebar (statically included), but here for the breadcrumbs
    'meta': {
      title: 'User',
      icon: 'person',
      geodata_required: false
    },
    'foci': {
      title: 'Foci',
      icon: 'bubble_chart',
      geodata_required: false
    },
    'seasons': {
      title: 'Seasons',
      icon: 'bubble_chart',
      geodata_required: false
    }
  },
  hash_params: {
    INSTANCE_ID: 'instance',
    API_URL: 'api_url'
  },
  temporal_intervals: ['week', 'month', 'quarter', 'year'],
  basemap: {
    // Middle of southern Africa, start point for zooming in
    default: {
      style: 'mapbox://styles/onlyjsmith/cj0kre65k002k2slaemj9yy0f',
      coords: [33.84455246087134,-20.228122283366602],
      zoom: 4.7
    },
    map_token: 'pk.eyJ1Ijoib25seWpzbWl0aCIsImEiOiI3R0ZLVGtvIn0.jBTrIysdeJpFhe8s1M_JgA'
  },
  instances: {
    list: ['foci', 'struc_demo', 'make', 'bwa', 'nam', 'swz', 'zwe-mats', 'zwe-matn', 'rsa', 'mwi-schisto', 'moz-gbm'],
  },
  remote: {
    max_records_batch_size: 100
  },
}