import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <div className=" h-16 bg-slate-200 pl-5">
      <div className="flex justify-between items-center align-middle ">
        <h1 className=" font-extrabold text-zinc-500 text-2xl">DIPNET</h1>
        <div className="flex justify-between items-center align-middle p-3 gap-5">
          <Button variant={"outline"}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
