import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("Logged out successfully");
  };
  return (
    <div className="h-[60px] w-[400px] bg-white mx-auto rounded-2xl mt-12">
      <div className="flex justify-center ">
        <div className="flex flex-row justify-center text-2xl text-black font-thin list-none gap-6 mt-4 ml-4 cursor-pointer">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/signup")}>Signup</li>
          <li onClick={() => navigate("/login")}>Login</li>
          <li onClick={handleLogout}>Logout</li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
