"use client";

import React from "react";
import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import OAuthButtons from "./OAuthButtons";

const SignUpCard = ({ setMode }: { setMode: (val: string) => void }) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("In the handleSubmit function");

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!pendingVerification && (
        <div className="flex flex-col justify-center gap-2 px-5 xl:px-12 w-[80%]">
          <h1 className="text-3xl font-bold ">Create Account</h1>
          <p className="mb-6 break-[balance]">Please enter your details</p>
          <OAuthButtons />
          <form className="flex flex-col justify-center gap-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              type="email"
              required
              className="ring-1 ring-black rounded-md p-2 mb-2 h-[40px]   "
              name="email"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              required
              className="ring-1 ring-black mb-6 rounded-md p-2 h-[40px]  "
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="ring-amber-400 p-2 rounded-md ring-1 mb-4 hover:bg-amber-500/80 text-white  bg-amber-500"
              onClick={handleSubmit}
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
          </form>
        </div>
      )}
      {pendingVerification && (
        <div>
          <form>
            <input
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={onPressVerify}>Verify Email</button>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpCard;
