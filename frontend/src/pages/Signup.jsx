import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "", username: "" });

  const navigate = useNavigate();

  const handleChancge = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      if (form.email == "" || form.password == "" || form.username == "") {
        toast.error("Please enter the required fields");
      } else {
        const res = await api.post("/api/auth/signup", form);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success("Signup Successful!");

        console.log(res.data.user);
        navigate("/");
      }
    } catch (error) {
      toast.error("Signup Failed");
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <h1 className="text-4xl p-5 mt-[-25px] ">Signup</h1>
      <form
        onSubmit={handleSumbit}
        className="flex flex-col gap-4 border-3 border-[#BB96FC] p-2 rounded-lg "
      >
        <div className="">
          <label className="font-bold text-2xl text-right ">Username: </label>
          <input
            className="pl-4 ml-2 bg-white w-[280px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl placeholder:text-[#1E1E1E]  text-[#1E1E1E]  placeholder:opacity-35 mr-2 "
            id="username"
            name="username"
            autoComplete="off"
            type="username"
            placeholder="elonmusk@gmail.com"
            value={form.username}
            onChange={handleChancge}
          />
        </div>
        <div className="">
          <label className="font-bold text-2xl text-right ">Email: </label>
          <input
            className="pl-4 ml-12 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl placeholder:text-[#1E1E1E]  text-[#1E1E1E]  placeholder:opacity-35"
            id="email"
            name="email"
            autoComplete="off"
            type="email"
            placeholder="elonmusk@gmail.com"
            value={form.email}
            onChange={handleChancge}
          />
        </div>
        <div>
          <label className="font-bold text-2xl">Password: </label>
          <input
            className="pl-4 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl placeholder:text-[#1E1E1E] text-[#1E1E1E]     placeholder:opacity-35"
            id="password"
            name="password"
            autoComplete="off"
            type="password"
            placeholder="iowntwitter123"
            value={form.password}
            onChange={handleChancge}
          />
        </div>
        <button
          className="flex cursor-pointer bg-[#BB96FC] justify-center mx-auto p-2 rounded-lg font-bold hover:bg-purple-500"
          type="submit"
        >
          Signup
        </button>
        <p className="flex  justify-center mx-auto p-2 text-xl">
          Already have an account?
          <span
            className="pl-1 font-bold cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
