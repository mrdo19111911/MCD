import { takeLatest, all, put, call } from "redux-saga/effects";

import {
  GET_LIST_ALL_THAY_BOI_REQUEST,
  GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS,
  GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE
} from "../action/constants";

import Api from "../api/ThayBoi";
const requestListThayBoi = function*() {
  try {
    const result = yield call(Api.getThayBoi);
      yield put({
        type: GET_LIST_ALL_THAY_BOI_REQUEST_SUCCESS,
        payload: result.data
      });
  } catch (error) {
    yield put({
      type: GET_LIST_ALL_THAY_BOI_REQUEST_FAILURE,
      payload: error
    });
  }
};
export default [
  function* fetchWatcher() {
    yield all([takeLatest(GET_LIST_ALL_THAY_BOI_REQUEST, requestListThayBoi)]);
  }
];
