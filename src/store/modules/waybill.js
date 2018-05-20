import WaybillDetaill from '../../api/getwaybill'

// state
const state = {
  logisticsRecord: [],
  waybillStatus: ''
}

// actions
const actions = {
  getWaybill (context, params) {
    if (WaybillDetaill.WaybillDetaill[params.billid]) {
      context.commit('pushLogisticsRecord', WaybillDetaill.WaybillDetaill[params.billid])
    } else {
      context.commit('shiftLogisticsRecord')
    }
  }
}

// mutations
const mutations = {
  pushLogisticsRecord (state, params) {
    state.logisticsRecord = params.logisticsRecord
    state.waybillStatus = params.waybillStatus
  },
  shiftLogisticsRecord (statte) {
    state.logisticsRecord = []
    state.waybillStatus = ''
  }
}

export default {
  state,
  actions,
  mutations
}
