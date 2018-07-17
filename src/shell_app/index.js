import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Shell from './shell'
import Login from './login'

export function launch_shell_app() {

  const routes = [
    {
      path: '/',
      component: Login,
    }
  ]

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  const store = new Vuex.Store({
    state: {
      nothing: null,
    },
  })

  shell_app = new Vue({
    el: '#shell',
    router,
    store,
    render: createElement => createElement(Shell),
  })
}
}