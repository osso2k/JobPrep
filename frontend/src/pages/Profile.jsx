import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (getUser) {
      setUser(JSON.parse(getUser));
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const date = user.createdAt;
  const joinedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div>
      <div className="grid grid-rows-2 w-[90%] h-[60%] bg-[hsl(0,0%,12%)] rounded-lg mx-auto mt-4 shadow-sm shadow-white">
        <div className="grid grid-cols-2 justify-between">
          <div className="order-1 flex m-4">
            <CiUser className="text-7xl mt-3 mx-4 text-[#BB96fc]" />
            <div className="flex flex-col">
              <h1 className="text-4xl ml-2">{user.username}</h1>
              <p className="text-lg">{user.email}</p>
              <p className="mt-2">{joinedDate}</p>
            </div>
          </div>
          <div className="order-2 text-right ">
            <div className="flex flex-col items-end">
              <button
                onClick={handleLogout}
                className="bg-[hsl(0,0%,15%)] px-[18px] py-1 rounded  cursor-pointer mt-8 mr-6 shadow-sm shadow-gray-600 "
              >
                Log Out
              </button>
              <button className="bg-[hsl(0,0%,15%)] rounded  cursor-pointer mt-2 mr-6 px-2 py-1 shadow-sm shadow-gray-600">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="order-2">
          <div className="grid grid-cols-3 gap-6 w-[80%] mx-auto mb-7 ">
            <div className="bg-[hsl(0,0%,17%)] rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
              <FaRegCommentDots className="text-purple-400 text-4xl mb-3" />
              <h2 className="text-2xl font-bold text-white">12</h2>
              <p className="text-gray-400">Questions Posted</p>
            </div>

            <div className="bg-[hsl(0,0%,17%)] rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
              <FaMedal className="text-purple-400 text-4xl mb-3" />
              <h2 className="text-2xl font-bold text-white">85</h2>
              <p className="text-gray-400">Helpful Votes</p>
            </div>

            <div className="bg-[hsl(0,0%,17%)] rounded-xl p-6 flex flex-col items-center justify-center shadow-md">
              <FaFire className="text-purple-400 text-4xl mb-3" />
              <h2 className="text-2xl font-bold text-white">7 days</h2>
              <p className="text-gray-400">Current Streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
