import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className=" h-16 bg-slate-200">
      <div className="flex justify-between items-center align-middle p-3">
        <h1 className=" font-extrabold text-2xl">DIPNET</h1>
        <Button variant={"outline"}>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
