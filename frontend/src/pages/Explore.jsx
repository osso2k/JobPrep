import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import JobNav from "../components/JobNav";
import api from "../api/axios.js";
const Explore = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("/explore");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
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
            onChange={handleChange}
            type="text"
            name="search"
            className="rounded-lg h-10 w-[90%] bg-[hsl(0,0%,24%)] pl-4 outline-none"
            placeholder="Search questions or job roles..."
          />
          <AiOutlineSearch className=" mt-2 h-7 w-7 ml-[-35px]" />
        </div>
        <div>
          <JobNav search={setSearch} />
        </div>
        <div>
          <h2 className="transition">
            {posts.length === 0 ? (
              <p className="text-center text-gray-400">No posts yet</p>
            ) : (
              posts
                .filter((post) => {
                  return search.toLowerCase() === ""
                    ? post
                    : post.role.toLowerCase().includes(search.toLowerCase());
                })
                .map((post, idx) => (
                  <div
                    key={idx}
                    className="border rounded-2xl p-4 border-[#E0E0E0] mb-4 hover:bg-[#2A2A2A] transition-colors shadow-sm shadow-[#E0E0E0] mt-6 "
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[#BB96FC] mb-2">
                      {post.role}
                    </h3>
                    <p className="text-base md:text-lg text-gray-300">
                      {post.content}
                    </p>
                  </div>
                ))
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Explore;
