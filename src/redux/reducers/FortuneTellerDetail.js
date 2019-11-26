import {
  GET_DETAIL_FORTUNETELLER_EVALUATE,
  GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS,
  GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE
} from "../action/constants";
const defaultState = {
  getData: {
    id: "",
    page: ""
  },
  receviedData: null,
  error: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_FORTUNETELLER_EVALUATE: {
      return {
        ...state,
        getData: {
          id: payload.id,
          page: payload.page
        }
      };
    }
    case GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS: {
      return {
        ...state,
        receviedData: payload
      };
    }
    case GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE: {
      return {
        ...state,
        receviedData: [],
        error: true
      };
    }
    default:
      return state;
  }
};
