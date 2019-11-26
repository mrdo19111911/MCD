import { CHANGE_PAGE, CHANGE_SEARCH_INPUT, SUBMIT_SEARCH } from "./constants";

export const changePage = payload => ({
  type: CHANGE_PAGE,
  payload
});

export const changeSearchInput = payload => ({
  type: CHANGE_SEARCH_INPUT,
  payload
});

export const submitSearch = payload => ({
  type: SUBMIT_SEARCH,
  payload
});
