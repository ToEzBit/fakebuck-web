import React from "react";

function PostFeedback({ toggleShow, post: { like, Comments: comments } }) {
  return (
    <div className="d-flex tw-py-2.5">
      <div className="d-flex align-items-center space-x-1.5 flex-grow-1">
        <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center w-4.5 h-4.5">
          <i className="fa-solid fa-thumbs-up text-white text-2.5" />
        </div>
        <small className="text-muted">{like}</small>
      </div>
      <small
        className="text-muted hover-underline"
        role="button"
        onClick={toggleShow}
      >
        {comments.length} Comments
      </small>
    </div>
  );
}

export default PostFeedback;
