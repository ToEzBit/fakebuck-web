import React from "react";
import NewPostBox from "./NewPostBox";
import PostList from "./PostList";

function PostContainer() {
  return (
    <div className="max-w-147.5 mx-auto py-4">
      <NewPostBox />
      <PostList />
    </div>
  );
}

export default PostContainer;
