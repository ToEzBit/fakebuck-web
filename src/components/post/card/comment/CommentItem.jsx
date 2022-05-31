import React from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../../common/UserIcon";
import { timeSince } from "../../../../services/dateFormat";
import { useAuth } from "../../../../contexts/AuthContext";
import { usePost } from "../../../../contexts/PostContext";
import { deleteComment } from "../../../../api/post";
import { deleteCommentAction } from "../../../../action/postAction";

function CommentItem({ comment }) {
  const {
    User: { id, firstName, lastName, profilePic },
    updatedAt,
    title,
    postId,
    id: commentId,
  } = comment;

  const { user } = useAuth();
  const { dispatch } = usePost();

  const handleClickDeleteComment = async () => {
    await deleteComment(postId, commentId);
    dispatch(deleteCommentAction({ postId, commentId }));
  };
  return (
    <div className="d-flex">
      <Link to={`/profile/${id}`}>
        <UserIcon src={profilePic} size="32" />
      </Link>

      <div className="d-flex flex-column ms-2">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
            <Link
              to={`/profile/${id}`}
              className="text-dark text-3 fw-bold no-underline hover-underline"
            >
              {firstName} {lastName}
            </Link>
            <small>{title}</small>
          </div>
          {user.id === id && (
            <div className="dropdown ms-1">
              <button
                className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200 shadow-none"
                data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
              <div className="dropdown-menu ">
                <button className="dropdown-item" type="button">
                  Edit
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={handleClickDeleteComment}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        <span className="text-muted ms-2 text-3">{timeSince(updatedAt)}</span>
      </div>
    </div>
  );
}

export default CommentItem;
