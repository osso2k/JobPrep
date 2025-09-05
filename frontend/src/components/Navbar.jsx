import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-[50px] w-[300px] bg-[#1E1E1E] mx-auto rounded-2xl mt-12 border border-[#E0E0E0] shadow-sm shadow-white">
      <div className="flex justify-center ">
        <div className="flex flex-row justify-center text-lg text-[#E0E0E0] font-thin list-none gap-6 mt-1 mx-auto cursor-pointer">
          <li
            className={` m-2 ${
              location.pathname === "/"
                ? "text-gray-400 "
                : "hover:text-gray-400 "
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={` m-2 ${
              location.pathname === "/explore"
                ? "text-gray-400 "
                : "hover:text-gray-400 "
            }`}
            onClick={() => navigate("/explore")}
          >
            Explore
          </li>

          <li
            className={` m-2 ${
              location.pathname === "/profile"
                ? "text-gray-400 "
                : "hover:text-gray-400 "
            }`}
            onClick={() => navigate("/profile")}
          >
            Profile
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
