import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import Spinner from "../common/Spinner";

import CoverPhoto from "./CoverPhoto";
import ProfileDetail from "./ProfileDetail";

function ProfileContainer() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(`/users/${id}`);
        setUserProfile(res.data.user);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [id]);
  if (loading) return <Spinner />;
  return (
    <div className=" border border-2 shadow-sm pb-2">
      <CoverPhoto src={userProfile.coverPhoto} />
      <ProfileDetail userProfile={userProfile} />
    </div>
  );
}

export default ProfileContainer;
