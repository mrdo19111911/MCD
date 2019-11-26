import {
  GET_DETAIL_FORTUNETELLER_EVALUATE,
  GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS,
  GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE
} from "./constants";

export const get_detail_fortuneteller_evaluate = (id,page) => ({
  type: GET_DETAIL_FORTUNETELLER_EVALUATE,
  payload:{
    id,page
  }
});

export const get_detail_fortuneteller_evaluate_success = payload => ({
  type: GET_DETAIL_FORTUNETELLER_EVALUATE_SUCCESS,
  payload
});

export const get_detail_fortuneteller_evaluate_failure = payload => ({
  type: GET_DETAIL_FORTUNETELLER_EVALUATE_FAILURE,
  payload
});
