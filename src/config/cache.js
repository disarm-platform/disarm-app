import locality_geodata from '../yland.locality.geojson'

const cache = {
  geodata: {
    locality: locality_geodata
  },
}
// TODO: @debug Remove this global when we no longer need our training wheels
window.__disarm_debug_cache = cache

export default cache
