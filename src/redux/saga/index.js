import { fork, all } from "redux-saga/effects";

import Search from "./Search";
import Request from "./Request";
import FortuneTellerDetail from "./FortuneTellerDetail";
import LoginSocial from "./LoginSocial";

const rootSaga = function*() {
  yield all([...Search.map(watcher => fork(watcher))]),
    yield all([...Request.map(watcher => fork(watcher))]),
    yield all([...FortuneTellerDetail.map(watcher => fork(watcher))]),
    yield all([...LoginSocial.map(watcher => fork(watcher))]);
};

export default rootSaga;
