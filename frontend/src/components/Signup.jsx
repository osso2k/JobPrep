import React from "react";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
  const tst = () => {
    toast.success("Hell yea");
  };
  return (
    <div className="flex flex-col items-center justify-center mt-[100px]">
      <form className="flex flex-col gap-4">
        <div className="">
          <label className="font-bold text-2xl text-right ">Email: </label>
          <input
            className="pl-4 ml-12 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl"
            id="email"
            name="email"
            type="text"
            placeholder="elonmusk@gmail.com"
          />
        </div>
        <div>
          <label className="font-bold text-2xl">Password: </label>
          <input
            className="pl-4 bg-white w-[300px] h-[60px] text-xl rounded-lg placeholder:transition placeholder:duration-500  placeholder:text-xl"
            id="password"
            name="password"
            type="text"
            placeholder="iowntwitter123"
          />
        </div>
        <button type="submit" onClick={tst}>
          Submit
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default Signup;
