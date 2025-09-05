import React from "react";

const JobNav = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="list-none flex gap-2">
        <li className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)]">
          All roles
        </li>
        <li className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)]">
          Frontend Engineer
        </li>
        <li className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)]">
          Backend Engineer
        </li>
        <li className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)]">
          Data Scientist
        </li>
        <li className="border-1 border-gray-700 p-2 mt-3 rounded-2xl text-[hsl(0,0%,60%)]">
          Machine Learning Engineer
        </li>
      </div>
    </div>
  );
};

export default JobNav;
