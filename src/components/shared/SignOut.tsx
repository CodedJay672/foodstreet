"use client";

import FoodContext from "@/context/GlobalContext";
import { getCurrentUser, signOut } from "@/lib/actions/user.actions";
import { LogOutIcon } from "lucide-react";

import { useRouter } from "next/navigation";
import { Models } from "node-appwrite";
import React, { useContext, useEffect } from "react";
import { toast } from "sonner";

const SignOut = () => {
  const router = useRouter();
  const { toggleUserDropdown } = useContext(FoodContext);
  const [user, setUser] = React.useState<Models.Document | null>(null);

  const signUserOut = async () => {
    try {
      await signOut();
      router.push("/");
      return toast.success("User signed out.");
    } catch (error: any) {
      throw new Error("Error signing out user", error.message);
    }
  };

  return (
    <>
      {user && (
        <div
          className="w-full flex items-center gap-1 cursor-pointer"
          onClick={() => {
            toggleUserDropdown();
            signUserOut();
          }}
        >
          <LogOutIcon size={24} className="text-primary" />
          <span className="text-base font-thin">Logout</span>
        </div>
      )}
    </>
  );
};

export default SignOut;
