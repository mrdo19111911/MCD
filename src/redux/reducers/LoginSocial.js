import { SHOW_LOGIN, SHOW_REGISTER } from "../action/constants";

const defaultState = {
  showModalLogin: {
    visible: false
  },
  showModalRegister: {
    visible: false
  }
};

export default (state = defaultState, { type }) => {
  switch (type) {
    case SHOW_LOGIN: {
      return {
        ...state,
        showModalLogin: {
          visible: true
        },
        showModalRegister: {
          visible: false
        }
      };
    }
    case SHOW_REGISTER: {
      return {
        ...state,
        showModalRegister: {
          visible: true
        },
        showModalLogin: {
          visible: false
        }
      };
    }
    default:
      return state;
  }
};
