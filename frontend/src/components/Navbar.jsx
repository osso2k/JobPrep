import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[60px] w-[400px] bg-[#1E1E1E] mx-auto rounded-2xl mt-12 border border-[#BB96FC]">
      <div className="flex justify-center ">
        <div className="flex flex-row justify-center text-2xl text-[#E0E0E0] font-thin list-none gap-6 mt-2 ml-4 cursor-pointer">
          <li
            className="hover:text-gray-400  m-2"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="hover:text-gray-400 m-2"
            onClick={() => navigate("/popular")}
          >
            Popular
          </li>
          <li
            className="hover:text-gray-400 m-2"
            onClick={() => navigate("/saved")}
          >
            Saved
          </li>
          <li
            className="hover:text-gray-400 m-2 pr-3"
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
