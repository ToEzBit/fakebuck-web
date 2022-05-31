import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import axios from "../../config/axios";
import FriendCard from "./FriendCard";

const getTitle = (pathname) => {
  switch (pathname) {
    case "/friend/request": {
      return "Friend Request";
    }
    case "/friend/suggestion": {
      return "Suggestion";
    }
    default: {
      return "All Friends";
    }
  }
};

const fetchUser = (pathname) => {
  switch (pathname) {
    case "/friend/request": {
      return axios.get("/friends?status=PENDING");
    }
    case "/friend/suggestion": {
      return axios.get("/friends?status=UNKNOWN");
    }
    default: {
      return axios.get("/friends");
    }
  }
};

function FriendContainer() {
  const { pathname } = useLocation();
  const [friends, setFriends] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetchUser(pathname);
      setFriends(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pathname]);

  return (
    <div className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5">
      <h1 className="text-5 mb-3 fw-bold">{getTitle(pathname)}</h1>
      <div className="row g-2">
        {friends.map((el, idx) => (
          <FriendCard key={idx} friend={el} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
}

export default FriendContainer;
