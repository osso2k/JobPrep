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
        <div className="flex flex-row justify-center text-2xl text-black font-thin list-none gap-6 mt-2 ml-4 cursor-pointer">
          <li
            className="hover:text-gray-400  m-2"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-gray-400 m-2"
            onClick={() => navigate("/signup")}
          >
            Signup
          </li>
          <li
            className="hover:text-gray-400 m-2"
            onClick={() => navigate("/login")}
          >
            Login
          </li>
          <li className="hover:text-gray-400 m-2" onClick={handleLogout}>
            Logout
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
