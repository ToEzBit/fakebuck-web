import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import UserIcon from "../../common/UserIcon";
import defaultUserPic from "../../../assets/images/defaultUserPic.png";

function ProfileIcon() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Link
        to={`/profile/${user.id}`}
        className="rounded-pill p-1 d-flex align-items-center text-decoration-none hover-bg-gray-200"
      >
        <UserIcon size="28" src={user.profilePic || defaultUserPic} />
        <span className="ms-2 text-dark fw-bold me-1 text-3.5">
          {user.firstName}&nbsp;
          {user.lastName}
        </span>
      </Link>
    </>
  );
}

export default ProfileIcon;
