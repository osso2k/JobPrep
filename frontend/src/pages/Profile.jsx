import React from "react";
import ProfileCard from "../components/ProfileCard";
import UserQuestions from "../components/UserQuestions";

const Profile = () => {
  return (
    <div>
      <ProfileCard />
      <h3 className="mt-15 ml-7 text-3xl font-extrabold">Your Questions</h3>
      <UserQuestions />
    </div>
  );
};

export default Profile;
