import { takeLatest, call, put, all } from "redux-saga/effects";

import { SHOW_LOGIN, SHOW_REGISTER } from "../action/constants";

const showLogin = function*() {
  console.log("đăng nhập");
};

const showRegister = function*() {
  console.log("đăng kí");
};
export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(SHOW_LOGIN, showLogin),
      takeLatest(SHOW_REGISTER, showRegister)
    ]);
  }
];
