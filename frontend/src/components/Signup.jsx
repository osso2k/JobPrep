import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChancge = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      if (form.email == "" || form.password == "") {
        toast.error("Please enter the required fields");
      } else {
        const res = await api.post("/signup", form);
        localStorage.setItem("token", res.data.token);

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
      <form onSubmit={handleSumbit} className="flex flex-col gap-4">
        <div className="">
          <label className="font-bold text-2xl text-right ">Email: </label>
          <input
            className="pl-4 ml-12 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl"
            id="email"
            name="email"
            type="email"
            placeholder="elonmusk@gmail.com"
            value={form.email}
            onChange={handleChancge}
          />
        </div>
        <div>
          <label className="font-bold text-2xl">Password: </label>
          <input
            className="pl-4 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl"
            id="password"
            name="password"
            type="password"
            placeholder="iowntwitter123"
            value={form.password}
            onChange={handleChancge}
          />
        </div>
        <button
          className="flex cursor-pointer bg-white justify-center mx-auto p-2 rounded-lg "
          type="submit"
        >
          Submit
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
