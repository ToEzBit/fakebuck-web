import React from "react";
import defaultProfilePic from "../../assets/images/defaultUserPic.png";

function UserCard({ src }) {
  return (
    <img
      src={src || defaultProfilePic}
      className="card-img-top rounded-t-lg "
      alt="user"
    />
  );
}

export default UserCard;
