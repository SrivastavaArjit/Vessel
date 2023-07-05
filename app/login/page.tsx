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
    signUpEffect = "left-[50%]  invisible";
    signInEffect = "left-[50%]  visible  [transition-delay:0s,0.4s]";
    bgEffect = "left-0";
    circleEffect = "bg-red-400";
  } else {
    signUpEffect = "left-0  visible [transition-delay:0s,0.4s]";
    signInEffect = "left-0  invisible";
    bgEffect = "left-[50%]";
    circleEffect = "bg-amber-500";
  }

  return (
    <>
      <main className="flex h-screen relative overflow-hidden ">
        <div
          className={`absolute flex flex-col items-center   justify-center h-[100%] w-[50%] ${signUpEffect}  [transition:left_1s,visibility_0.25s] `}
        >
          <SignUpCard setMode={setMode} />
        </div>

        <div
          className={`w-[50%] flex justify-center items-center absolute h-[100%] ${bgEffect} bg-background transition-all  duration-login z-10`}
        >
          <div
            className={`w-60 h-60 rounded-full ${circleEffect} transition-all duration-login`}
          ></div>
          <div className="w-full h-[50%] absolute bottom-0 backdrop-blur-[20px]"></div>
        </div>

        <div
          className={`absolute flex flex-col  items-center justify-center  h-[100%]  w-[50%] ${signInEffect} [transition:left_1s,visibility_0.25s]  `}
        >
          <SignInCard setMode={setMode} />
        </div>
      </main>
    </>
  );
};

export default Page;
