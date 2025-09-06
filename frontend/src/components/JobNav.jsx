import React from "react";

const JobNav = ({ search }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="list-none flex gap-2">
        <li
          onClick={() => {
            search("");
          }}
          className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)] cursor-pointer hover:text-[hsl(0,0%,32%)] focus:text-white"
        >
          All roles
        </li>
        <li
          onClick={() => {
            search("frontend");
          }}
          className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)] cursor-pointer hover:text-[hsl(0,0%,32%)] focus:text-white"
        >
          Frontend Engineer
        </li>
        <li
          onClick={() => {
            search("backend");
          }}
          className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)] cursor-pointer hover:text-[hsl(0,0%,32%)] focus:text-white"
        >
          Backend Engineer
        </li>
        <li
          onClick={() => {
            search("data");
          }}
          className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)] cursor-pointer hover:text-[hsl(0,0%,32%)] focus:text-white"
        >
          Data Scientist
        </li>
        <li
          onClick={() => {
            search("machine Learning");
          }}
          className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)] cursor-pointer hover:text-[hsl(0,0%,32%)] focus:text-white"
        >
          Machine Learning Engineer
        </li>
      </div>
    </div>
  );
};

export default JobNav;
