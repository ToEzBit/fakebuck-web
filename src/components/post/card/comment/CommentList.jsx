import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div className="pt-2 d-flex flex-column space-y-1">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
