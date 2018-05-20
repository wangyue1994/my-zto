/**
 * Created by wangyue on 18/5/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import waybill from './modules/waybill'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    waybill
  }
})
