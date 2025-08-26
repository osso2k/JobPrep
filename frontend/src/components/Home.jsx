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
  }, []);

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
      <div className="grid grid-rows-2 ">
        <div className=" bg-[#1E1E1E] w-[70%] h-[300px] mx-auto gap-1 mt-3 rounded-2xl border border-[#BB96FC] ">
          <div className=" mx-auto p-2 ">
            <form onSubmit={handleSumbit}>
              <input
                type="text"
                name="content"
                className="bg-[hsl(0,0%,15%)] rounded-[55px] mt-3 w-[800px] h-[80px] text-[#E0E0E0]  text-2xl pl-6 mr-2"
                placeholder="..."
                value={form.content}
                onChange={handleChancge}
              />

              <input
                type="text"
                name="role"
                className="bg-[hsl(0,0%,15%)] rounded-[55px] mt-3 w-[400px] h-[80px] text-[#E0E0E0] text-2xl pl-6"
                placeholder="Job role"
                value={form.role}
                onChange={handleChancge}
              />
              <button
                type="submit"
                className="flex mx-auto text-3xl font-semibold mt-2 py-2 px-4 bg-[#BB96FC] rounded-[20px] cursor-pointer "
              >
                Post
              </button>
              <h2 className=" flex text-2xl font-bold justify-center p-4 mt-4 ">
                Please submit valid questions so we can all benefit.
              </h2>
            </form>
          </div>
        </div>
        <div className="w-[80%] mx-auto bg-[#1E1E1E] rounded-2xl mb-4">
          <div className="grid grid-cols-2">
            <div className="order-2">
              <h2 className="p-2">
                {posts.length === 0 ? (
                  <p>No posts yet</p>
                ) : (
                  posts.map((post, idx) => (
                    <div
                      key={idx}
                      className="border rounded-2xl pl-2 border-[#BB96FC] pb-2 mb-2"
                    >
                      <h3 className="text-xl font-semibold text-[#E1E1E1]">
                        {post.role}
                      </h3>
                      <p className="text-lg text-gray-300">{post.content}</p>
                    </div>
                  ))
                )}
              </h2>
            </div>
            <div className="order-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
