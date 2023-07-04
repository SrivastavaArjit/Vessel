"use client";

import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignUpCard = ({ setMode }: { setMode: (val: string) => void }) => {
  return (
    <form className="flex flex-col justify-center gap-2 px-16 w-[80%]">
      <h1 className="text-3xl font-bold break-[balance]">
        Create Your Account
      </h1>
      <p className="mb-6 break-[balance]">Enter your details</p>
      <label htmlFor="email" className="font-bold">
        Email
      </label>
      <input
        type="email"
        required
        className="ring-1 ring-black rounded-md p-2 mb-2 h-[40px] bg-neon text-black focus:outline-none"
        name="email"
      />
      <label htmlFor="password" className="font-bold">
        Password
      </label>
      <input
        type="password"
        required
        className="ring-1 ring-black mb-6 rounded-md p-2 h-[40px] bg-neon text-black focus:outline-none"
        name="password"
      />
      <button
        type="submit"
        className="ring-black p-2 rounded-md ring-1 mb-4 hover:bg-black/80 text-white bg-black"
      >
        SIGN UP
      </button>
      <div className=" flex gap-2">
        Already have an account?
        <button
          type="button"
          onClick={() => setMode("sign-in")}
          className="outline-none font-bold hover:underline underline-offset-2"
        >
          Sign In
        </button>
      </div>
      {/* <button className="ring-black p-2 rounded-md ring-1 hover:bg-black hover:text-white">
        <FaGoogle size={25} className="inline-block" /> Google
      </button> */}
    </form>
  );
};

export default SignUpCard;
