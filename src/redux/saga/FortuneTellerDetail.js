import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  GET_DETAIL_FORTUNETELLER_EVALUATE,
  GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS,
  GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE
} from "../action/constants";

import Api from "../api/ThayBoi";

const requestDetail = function*() {
  try {
      // const result = yield call(Api.getFTDetail);

  } catch (error) {
    yield put({
      type: GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE,
      payload: error
    });
  }
};

export default [
  function* fetchWatcher() {
    yield all([takeLatest(GET_DETAIL_FORTUNETELLER_EVALUATE, requestDetail)]);
  }
];
