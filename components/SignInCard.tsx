"use client";
import React from "react";

const SignInCard = ({ setMode }: { setMode: (val: string) => void }) => {
  return (
    <form className="flex flex-col justify-center gap-2 px-16 w-[80%]">
      <h1 className="text-3xl font-bold break-[balance]">Welcome Back</h1>
      <p className="mb-6 break-[balance]">
        Welcome back! Please enter your details
      </p>
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        type="email"
        required
        className="ring-1 ring-black  rounded-md p-2 mb-2 h-[40px]  "
        name="email"
      />
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <input
        type="password"
        required
        className=" ring-1 ring-black mb-6 rounded-md p-2 h-[40px]"
        name="password"
      />
      <button
        type="submit"
        className=" p-2 rounded-md  mb-4 hover:bg-red-400/80 text-white bg-red-400"
      >
        SIGN IN
      </button>
      <div className=" flex gap-2">
        Don&apos;t have an account?
        <button
          type="button"
          onClick={() => setMode("sign-up")}
          className="outline-none font-bold hover:underline underline-offset-2"
        >
          Sign Up
        </button>
      </div>
      {/* <button className="ring-black p-2 rounded-md ring-1 hover:bg-black hover:text-white">
        <FaGoogle size={25} className="inline-block" /> Google
      </button> */}
    </form>
  );
};

export default SignInCard;
