import { takeLatest, all, put, call } from "redux-saga/effects";

import { ADD_COMMENT } from "../action/constants";

const addComment = function*() {
  console.log("a");
};

export default [
  function* fetchWatcher() {
    yield all([takeLatest(ADD_COMMENT, addComment)]);
  }
];
