import React, { useEffect, useState } from "react";
import api from "../api/axios.js";
import toast from "react-hot-toast";

const Home = () => {
  const [form, setForm] = useState({ content: "", role: "" });
  const [posts, setPosts] = useState([]);

  const handleChancge = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      if (form.content == "") {
        toast.error("Post cannot be empty");
      } else if (form.role == "") {
        toast.error("Role cannot be empty");
      }

      await api.post("/post", form);
      toast.success("Post created successfully");
      setForm({ content: "", role: "" });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      // const user = localStorage.getItem("user");
      try {
        const res = await api.get("/");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, [form]);

  return (
    <div className="flex flex-col mt-10 px-4 max-w-7xl mx-auto">
      <div className="flex mx-auto bg-[#1E1E1E] p-4 md:p-6 rounded-lg border flex-col items-center justify-center border-[#E0E0E0] w-full">
        <h1 className="flex text-xl md:text-3xl mb-4 md:mb-6 justify-center text-center">
          "Preparing for a job interview? or trying to get better at them?"
        </h1>
        <h1 className="text-lg md:text-2xl mb-4 md:mb-6 text-center">
          Explore real interview questions shared by users, and contribute your
          own to help the community grow.
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-6">
        <div className="bg-[#1E1E1E] w-full md:w-[90%] lg:w-[70%] mx-auto p-4 rounded-2xl border border-[#BB96FC]">
          <form onSubmit={handleSumbit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="content"
                className="bg-[hsl(0,0%,15%)] rounded-[55px] w-full md:w-2/3 h-[60px] md:h-[80px] text-[#E0E0E0] text-xl md:text-2xl px-6"
                placeholder="..."
                value={form.content}
                onChange={handleChancge}
              />

              <input
                type="text"
                name="role"
                className="bg-[hsl(0,0%,15%)] rounded-[55px] w-full md:w-1/3 h-[60px] md:h-[80px] text-[#E0E0E0] text-xl md:text-2xl px-6"
                placeholder="Job role"
                value={form.role}
                onChange={handleChancge}
              />
            </div>

            <button
              type="submit"
              className="mx-auto text-xl md:text-3xl font-semibold py-2 px-6 bg-[#BB96FC] rounded-[20px] cursor-pointer hover:bg-opacity-90 transition-colors"
            >
              Post
            </button>

            <h2 className="text-lg md:text-2xl font-bold text-center p-4">
              Please submit valid questions so we can all benefit.
            </h2>
          </form>
        </div>

        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto bg-[#1E1E1E] rounded-2xl mb-4">
          {/* <div className="grid md:grid-cols-2"> */}
          <div className="order-2 p-4">
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
          {/* <div className="order-1"></div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
