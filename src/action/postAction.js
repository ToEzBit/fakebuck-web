export const INIT = "init";
export const CREATE_COMMENT = "createComment";
export const DELETE_COMMENT = "deleteComment";

export const initPost = (payload) => ({
  type: INIT,
  payload,
});

export const createCommentAction = (payload) => ({
  type: CREATE_COMMENT,
  payload,
});

export const deleteCommentAction = (payload) => ({
  type: DELETE_COMMENT,
  payload,
});
