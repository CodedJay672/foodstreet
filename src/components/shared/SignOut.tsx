"use client";

import { getCurrentUser, signOut } from "@/lib/actions/user.actions";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Models } from "node-appwrite";
import React, { useEffect } from "react";
import { HiOutlineArrowsPointingIn } from "react-icons/hi2";
import { toast } from "sonner";

const SignOut = () => {
  const router = useRouter();
  const [user, setUser] = React.useState<Models.Document | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();

      if (user) {
        setUser(user);
      }
    };

    getUser();
  }, []);

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
          onClick={signUserOut}
        >
          <LogOutIcon size={24} className="text-primary" />
          <span className="text-base font-thin">Logout</span>
        </div>
      )}
    </>
  );
};

export default SignOut;
