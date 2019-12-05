import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  ADD_COMMENT
} from "../action/constants";
const defaultState = {
  comments: [],
  error: false
};
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_COMMENT: {
      return {
        ...state
      };
    }
    case GET_COMMENT_SUCCESS: {
      return {
        ...state,
        comments: payload
      };
    }
    case GET_COMMENT_FAILURE: {
      return {
        ...state,
        comments: [],
        error: true
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        comments: payload
      };
    }
    default:
      return state;
  }
};
