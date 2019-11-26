import { takeLatest, all, put } from "redux-saga/effects";

// Cái này là của biến định nghĩa tên action
import {
  CHANGE_PAGE,
  CHANGE_SEARCH_INPUT,
  SUBMIT_SEARCH
} from "../action/constants";

//Cái này là của action
import { changePage, changeSearchInput, submitSearch } from "../action/Search";

const requestChangePage = function*() {
  yield put(changePage);
};

const requestSubmitSearch = function*() {
  yield put(submitSearch(true));
};

export default [
  function* fetchWatcher() {
    yield all([
      takeLatest(CHANGE_PAGE, requestChangePage),
      takeLatest(SUBMIT_SEARCH, requestSubmitSearch)
    ]);
  }
];
