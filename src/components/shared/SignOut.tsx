"use client";

import { signOut } from "@/lib/actions/user.actions";
import { LogOutIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const SignOut = () => {
  const signUserOut = async () => {
    try {
      await signOut();
      return toast.success("User signed out.");
    } catch (error: any) {
      throw new Error("Error signing out user", error.message);
    }
  };

  return (
    <div
      className="w-full flex items-center gap-1 cursor-pointer"
      onClick={signUserOut}
    >
      <LogOutIcon size={24} className="text-primary" />
      <span className="text-base font-thin">Logout</span>
    </div>
  );
};

export default SignOut;
