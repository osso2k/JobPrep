import React, { useEffect, useState } from "react";
import api from "../api/axios.js";

const UserQuestions = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const user = await localStorage.getItem("user");
        // const userId = await user._id;
        const res = await api.get("/myposts");
        setPosts(res.data);
      } catch (error) {
        console.log("Error fetching posts", error.message);
      }
    };
    fetchPosts();
  }, [posts]);
  return (
    <div>
      <div>
        <h2>
          {posts.length === 0 ? (
            <p className="text-center text-gray-400">No posts yet</p>
          ) : (
            posts.map((post, idx) => (
              <div
                key={idx}
                className="border rounded-2xl p-4 border-[#BB96FC] mb-4 hover:bg-[#2A2A2A] transition-colors shadow-sm shadow-[#BB96FC] "
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#E1E1E1] mb-2">
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
  );
};

export default UserQuestions;
