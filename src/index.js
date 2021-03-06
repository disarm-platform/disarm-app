// CSS
import './fonts/Roboto.css'
import './fonts/MaterialIcons.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import 'lib/bootstrap-extract.css' // contains only table-related stuff, but still TODO: remove reliance on bootstrap for monitor-table
import 'vue-material/dist/vue-material.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

// Imports
import 'config/configure_vue.js'
import {configure_error_tracking} from 'config/error_tracking'
import {main_or_shell} from './shell_app/main_or_shell'

(async () => {
  configure_error_tracking()
  main_or_shell()
})()
