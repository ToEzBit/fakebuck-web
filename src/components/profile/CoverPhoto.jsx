import React from "react";
import defaultCover from "../../assets/images/defaultCover.png";

function CoverPhoto({ src }) {
  return (
    <div
      className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
      style={{
        aspectRatio: "1096/404",
      }}
    >
      <img
        src={src || defaultCover}
        alt="cover"
        className="position-absolute img-fluid top-50 start-50 translate-middle"
      />
    </div>
  );
}

export default CoverPhoto;
