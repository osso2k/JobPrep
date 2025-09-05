import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import JobNav from "../components/JobNav";

const Explore = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-6">
        <h1 className="text-5xl font-semibold">Explore Interview Questions</h1>
        <p className="text-xl text-gray-400 pt-3 text-center max-w-3xl">
          Discover questions from various roles and industries to enhance your
          interview preparation.
        </p>
        <div className="flex mt-9 w-[50%] justify-center">
          <input
            type="text"
            className="rounded-lg h-10 w-[90%] bg-[hsl(0,0%,24%)] pl-4 outline-none"
            placeholder="Search questions or job roles..."
          />
          <AiOutlineSearch className=" mt-2 h-7 w-7 ml-[-35px]" />
        </div>
        <div>
          <JobNav />
        </div>
      </div>
    </div>
  );
};

export default Explore;
