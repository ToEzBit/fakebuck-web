import React from "react";
import { usePost } from "../../../../contexts/PostContext";
import CommentList from "./CommentList";
import NewCommentBox from "./NewCommentBox";

function CommentContainer({ post: { id } }) {
  const { commentMapping } = usePost();
  const comments = commentMapping[id];
  return (
    <div className="pb-2">
      <hr className="my-0 hr-sm" />
      <div className="pt-1">
        {comments.length > 10 && (
          <button className="btn p-0 pt-1 text-muted shadow-none text-3.5 hover-underline">
            View previous comments
          </button>
        )}
      </div>
      <CommentList comments={comments} />
      <NewCommentBox postId={id} />
    </div>
  );
}

export default CommentContainer;
