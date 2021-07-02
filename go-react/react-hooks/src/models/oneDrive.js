import {getListData} from "@/service/oneDrive";

export default {
  namespace: 'oneDrive',
  state: {
    data: [],
    next: null
  },
  effects: {
    *fetchData({payload}, {call, put}) {
      const response = yield call(getListData, payload)
      if (response.data) {
        yield put({
          type: 'queryData',
          payload: response
        })
      }
    }
  },
  reducers: {
    queryData(state, {payload}) {
      return {
        ...state,
        data: payload.data,
        next: payload.next || null
      }
    }
  },

}
