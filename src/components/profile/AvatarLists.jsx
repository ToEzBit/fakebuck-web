import React from "react";
import { useNavigate } from "react-router-dom";
import UserIcon from "../common/UserIcon";

function AvatarLists({ friends }) {
  const navigate = useNavigate();
  return (
    <div className="pt-1 mb-3">
      {friends.slice(0, 8).map((el, idx) => (
        <span
          className={idx ? "-ms-2" : ""}
          key={idx}
          role="button"
          onClick={() => navigate(`/profile/${el.id}`)}
        >
          <UserIcon size="32" border="2" src={el.profilePic} />
        </span>
      ))}
    </div>
  );
}

export default AvatarLists;
