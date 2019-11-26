import {
  GET_LIST_ALL_THAY_BOI_REQUEST,
  GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS,
  GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE
} from "../action/constants";
const defaultState = {
  listThayBoi: null,
  error: false
};
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_LIST_ALL_THAY_BOI_REQUEST: {
      return {
        ...state
      };
    }
    case GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS: {
      return {
        ...state,
        listThayBoi: payload
      };
    }
    case GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE: {
      return {
        ...state,
        listThayBoi: [],
        error: true
      };
    }
    default:
      return state;
  }
};
