import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCard from "../common/UserCard";
import axios from "../../config//axios";

function FriendCard({ friend, fetchData }) {
  const { profilePic, firstName, lastName, id } = friend;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClickAddFriend = async () => {
    try {
      await axios.post("/friends", { requestToId: id });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickAcceptFriend = async () => {
    try {
      await axios.patch("/friends/" + id);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickDeleteFriend = async () => {
    try {
      await axios.delete("/friends/" + id);
      fetchData();
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card h-100 shadow rounded-lg">
        <div>
          <UserCard src={profilePic} />
        </div>
        <div className="card-body">
          <h6
            className="card-title hover-underline"
            onClick={() => navigate(`/profile/${id}`)}
          >
            {firstName}&nbsp;{lastName}
          </h6>
          {pathname === "/friend/request" && (
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary text-3.5"
                onClick={handleClickAcceptFriend}
              >
                Confirm
              </button>
              <button className="btn btn-gray-200 text-3.5">Delete</button>
            </div>
          )}
          {pathname === "/friend/suggestion" && (
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary text-3.5"
                onClick={handleClickAddFriend}
              >
                Add Friend
              </button>
            </div>
          )}
          {pathname === "/friend" && (
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary text-3.5"
                onClick={handleClickDeleteFriend}
              >
                Delete Friend
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
