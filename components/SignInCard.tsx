"use client";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import OAuthButtons from "./OAuthButtons";

const SignInCard = ({ setMode }: { setMode: (val: string) => void }) => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(emailAddress, password);

    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
    }
  };
  return (
    <div className="flex flex-col justify-center gap-2 px-5 xl:px-12 w-[80%]">
      <h1 className="text-3xl font-bold break-[balance]">Welcome Back</h1>
      <p className="mb-6 break-[balance]">Please enter your details</p>
      <OAuthButtons />
      <form className="flex flex-col justify-center gap-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          type="email"
          required
          className="ring-1 ring-black rounded-md p-2 mb-2 h-[40px]  "
          name="email"
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          type="password"
          required
          className="ring-1 ring-black mb-6 rounded-md p-2 h-[40px]"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className=" p-2 rounded-md  mb-4 hover:bg-red-400/80 text-white bg-red-400"
          onClick={handleSubmit}
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
      </form>
    </div>
  );
};

export default SignInCard;
