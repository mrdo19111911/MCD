import {
  CHANGE_PAGE,
  CHANGE_SEARCH_INPUT,
  SUBMIT_SEARCH
} from "./../action/constants";

const defaultState = {
  inputValue: "",
  submit: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE: {
      return {
        ...state,
        inputValue: "",
        submit: false
      };
    }
    case CHANGE_SEARCH_INPUT: {
      return {
        ...state,
        inputValue: payload
      };
    }
    case SUBMIT_SEARCH: {
      return {
        ...state,
        submit: true
      };
    }
    default:
      return state;
  }
};
