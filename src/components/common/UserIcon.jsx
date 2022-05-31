import React from "react";
import defaultPic from "../../assets/images/defaultUserPic.png";

function UserIcon({ src, size, border }) {
  return (
    <>
      <img
        className={`rounded-circle ${
          border ? "border border white border-" + border : ""
        }`}
        src={src || defaultPic}
        width={size}
        height={size}
        alt="user"
      />
    </>
  );
}

export default UserIcon;
