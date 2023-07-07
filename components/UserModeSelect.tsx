"use client";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const UserModeSelect = () => {
  const { signOut } = useClerk();

  return (
    <>
      <SignedOut>
        <Link
          href="/login"
          className={cn(buttonVariants(), " rounded-full    w-24  -mr-2")}
        >
          Sign In
        </Link>
      </SignedOut>
      <SignedIn>
        <Button onClick={() => signOut()} className="rounded-full">
          Sign out
        </Button>

        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
};

export default UserModeSelect;
