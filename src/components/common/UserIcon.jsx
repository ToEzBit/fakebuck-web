import React from "react";

function UserIcon({ src, size }) {
  return (
    <>
      <img
        className="rounded-circle"
        src={src}
        width={size}
        height={size}
        alt="user"
      />
    </>
  );
}

export default UserIcon;
