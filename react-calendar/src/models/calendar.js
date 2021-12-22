export default {
  namespace: "calendar",
  state: {
    userinfo: {
      demo: "",
    },
  },
  effects: {
    *changeDemo({ payload }, {  put }) {
        yield put({
          type: "queryDemo",
          payload,
        });
    },
  },
  reducers: {
    queryDemo(state, { payload }) {
      return {
        ...state,
        demo: payload,
      };
    },

  },
};
