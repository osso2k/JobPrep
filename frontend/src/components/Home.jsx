import React, { useState } from "react";

const Home = () => {
  const [post, setPost] = useState({ post: "", role: "" });

  const handleChancge = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col mt-10">
      <div className="flex mx-auto bg-[#1E1E1E] p-4 rounded-lg border flex-col items-center justify-center  border-[#E0E0E0]">
        <h1 className="flex text-3xl mb-6 justify-center">
          "Preparing for a job interview? or trying to get better at them?"
        </h1>
        <h1 className="text-2xl mb-6 text-center">
          Explore real interview questions shared by users, and contribute your
          own to help the community grow.
        </h1>
      </div>
      <div className="flex bg-[#1E1E1E] w-[70%] mx-auto gap-1 mt-3 rounded-2xl border border-[#BB96FC] ">
        <div className="order-1 mx-auto p-2 ">
          <form>
            <input
              type="text"
              name="post"
              className="bg-[hsl(0,0%,15%)] rounded-[55px] mt-3 w-[800px] h-[80px] text-[#E0E0E0]  text-2xl pl-6"
              placeholder="..."
              value={post.post}
              onClick={handleChancge}
            />

            <input
              type="text"
              name="role"
              className="bg-[hsl(0,0%,15%)] rounded-[55px] mt-3 w-[400px] h-[80px] text-[#E0E0E0] text-2xl pl-6"
              placeholder="Job role"
              value={post.role}
              onClick={handleChancge}
            />
            <button type="submit" className="">
              Post
            </button>
            <h2 className=" flex text-xl font-bold justify-center p-8">
              Please submit valid questions so we can all benefit.
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
