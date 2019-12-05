import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  ADD_COMMENT
} from "./constants";

export const getComment = () => ({
  type: GET_COMMENT
});

export const getCommentSuccess = payload => ({
  type: GET_COMMENT_SUCCESS
});

export const getCommentFailure = () => ({
  type: GET_COMMENT_FAILURE
});

export const addComment = payload => ({
  type: ADD_COMMENT
});
