import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
  return (
    <div>
      <button
        onClick={handleLogout}
        className="border border-[#BB96FC] rounded px-4 relative text-xl top-3 left-[80%] cursor-pointer"
      >
        Log out
      </button>
      <div className="grid grid-cols-2 md:w-[90%] w-[50%] h-[800px] bg-[#1E1E1E] mt-4 mx-auto rounded-3xl border border-[#BB96FC] text-center">
        <div className="order-1">
          <div>
            <p>
              Your email is {user.email} and ur pass is {user.password}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
