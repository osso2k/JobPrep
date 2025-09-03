import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Explore = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error("No User");
    }
    setPosts(JSON.parse(user.posts));
  }, []);
  return (
    <div>
      <h2>
        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts yet</p>
        ) : (
          posts.map((post, idx) => (
            <div
              key={idx}
              className="border rounded-2xl p-4 border-[#BB96FC] mb-4 hover:bg-[#2A2A2A] transition-colors"
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
  );
};

export default Explore;
