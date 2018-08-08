import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Jax from '../jax/index.js'
import models from './models/index.js'
import router from './router/index.js'

import createConsole from 'console-with-explain'
window.console = createConsole()

Vue.use(Vuex)
Vue.use(Jax)
const app = new Vue({
  el: '#app',
  components: {App},
  store: new Vuex.Store({modules: models}),
  router,
  Jax,
  template: '<App/>'
});

export const wrapper = app.$jax.wrapper
export const mapMutations = app.$jax.mapMutations
export default app

