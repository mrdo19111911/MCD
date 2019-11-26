import {
  GET_LIST_ALL_THAY_BOI_REQUEST,
  GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS,
  GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE
} from "./constants";

export const getListAllThayBoiRequest = () => ({
  type: GET_LIST_ALL_THAY_BOI_REQUEST
});
export const getListAllThayBoiRequestSuccess = payload => ({
  type: GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS,
  payload
});

export const getListAllThayBoiRequestFailure = payload => ({
  type: GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE,
  payload
});
