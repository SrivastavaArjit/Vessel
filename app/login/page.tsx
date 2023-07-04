"use client";

import SignInCard from "@/components/SignInCard";
import SignUpCard from "@/components/SignUpCard";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const Page = () => {
  const [mode, setMode] = useState("sign-in");

  let signUpEffect;
  let signInEffect;
  let bgEffect;
  let circleEffect;

  if (mode === "sign-in") {
    signUpEffect = "left-[50%] opacity-0 invisible text-white";
    signInEffect = "left-[50%] opacity-1 visible";
    bgEffect = "left-0";
    // circleEffect = "opacity-1";
    circleEffect = "bg-neon";
  } else {
    signUpEffect = "left-0 opacity-1 visible";
    signInEffect = "left-0 opacity-0 invisible text-neon";
    bgEffect = "left-[50%]";
    // circleEffect = "opacity-0";
    circleEffect = "bg-white";
  }

  return (
    <>
      <main className="flex h-screen relative overflow-hidden bg-black">
        <div
          className={`absolute flex flex-col items-center justify-center  h-[100%] w-[50%] bg-neon ${signUpEffect} transition-all  duration-1000`}
        >
          <SignUpCard setMode={setMode} />
        </div>

        <div
          className={`w-[50%] flex justify-center items-center absolute h-[100%] bg-black ${bgEffect} transition-all  duration-1000 z-10`}
        >
          <div
            className={`w-60 h-60 rounded-full ${circleEffect} transition-all duration-1000`}
          ></div>
          <div className="w-full h-[50%] absolute bottom-0 backdrop-blur-[20px]"></div>
        </div>

        <div
          className={`absolute flex flex-col items-center justify-center h-[100%]  w-[50%] ${signInEffect} transition-all  duration-1000 bg-white`}
        >
          <SignInCard setMode={setMode} />
        </div>
      </main>
    </>
  );
};

export default Page;
