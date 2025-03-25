import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`email is ${email} and password is ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2  rounded-md border-white bg-[#F5EEDC] ">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-5 m-5 "
          onSubmit={(e) => submitHandler(e)}
          //because we want to prevent default behaviour of event to reload the form after completing task
        >
          <input
            required
            className="border-2 border-[#183B4E]  px-5 rounded-xl text-lg text-[#333] outline-none w-[300px] h-[50px]"
            type="email"
            name=""
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            className="border-2 border-[#183B4E] px-5 rounded-xl text-lg text-[#333] outline-none w-[300px] h-[50px]"
            type="password"
            name=""
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="bg-white text-black rounded-xl hover:bg-black hover:text-white w-[300px] h-[50px]"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
