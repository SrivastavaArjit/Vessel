import React from "react";
import { Button } from "./ui/button";
import { FaGoogle, FaMicrosoft, FaFacebookF } from "react-icons/fa";
import { useSignIn } from "@clerk/nextjs";
import { OAuthStrategy } from "@clerk/nextjs/dist/types/server";

const OAuthButtons = () => {
  const { signIn } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between mb-4">
      <Button
        onClick={() => signInWith("oauth_google")}
        className="flex-grow gap-2 m-1"
      >
        <FaGoogle size={20} /> Google
      </Button>
      <Button
        onClick={() => signInWith("oauth_facebook")}
        className="flex-grow gap-2 m-1"
      >
        <FaFacebookF size={20} /> Facebook
      </Button>
      <Button
        onClick={() => signInWith("oauth_microsoft")}
        className="flex-grow gap-2 m-1"
      >
        <FaMicrosoft size={20} /> Microsoft
      </Button>
    </div>
  );
};

export default OAuthButtons;
