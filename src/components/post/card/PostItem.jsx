import React from "react";
import PostBody from "./body/PostBody";
import PostFooter from "./footer/PostFooter";
import PostHeader from "./header/PostHeader";

function PostItem({ title, image, post }) {
  return (
    <div className="border bg-white rounded-lg shadow-sm px-3 tw-pt-3">
      <PostHeader post={post} />
      <PostBody title={title} image={image} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostItem;
