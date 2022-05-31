import React from "react";

function PostBody({ title, image }) {
  return (
    <div className="tw-mt-3">
      {title && <p className="text-3.5 mb-0">{title}</p>}
      {image && (
        <div className="-px-4 mt-3">
          <img src={image} alt="post" className="img-fluid" />
        </div>
      )}
    </div>
  );
}

export default PostBody;
