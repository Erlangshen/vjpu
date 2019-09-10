import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug, // 严格模式 测试环境开启
  plugins: [
    debug ? createLogger() : () => {}
  ]
})
