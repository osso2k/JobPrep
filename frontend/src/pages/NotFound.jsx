import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] px-4 rounded-4xl">
      <h1 className="text-6xl md:text-8xl font-bold text-[#BB96FC] mb-4">
        404
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#BB96FC] text-white rounded-lg hover:bg-opacity-90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
