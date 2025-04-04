"use client";

import { signOut } from "@/lib/actions/user.actions";
import { LogOutIcon } from "lucide-react";
import React from "react";

const SignOut = () => {
  return (
    <div
      className="w-full flex items-center gap-1"
      onClick={async () => signOut()}
    >
      <LogOutIcon size={24} className="text-primary" />
      <span className="text-base font-thin">Logout</span>
    </div>
  );
};

export default SignOut;
