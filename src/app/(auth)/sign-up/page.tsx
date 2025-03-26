import AuthForm from "@/components/shared/AuthForm";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const user = await getCurrentUser();

  if (user) redirect("/");

  return (
    <section className="w-full min-h-screen flex-center flex-col gap-4 p-10 bg-gray-50">
      <div className="w-full flex-center flex-col gap-2">
        <h1 className="text-xl lg:text-2xl font-bold text-raw-300 text-center">
          Sign Up
        </h1>
        <p className="text-base font-normal text-center">Enter details below</p>
      </div>

      <div className="w-full max-w-sm flex-center mt-10">
        <AuthForm type="SIGN_UP" />
      </div>
    </section>
  );
};

export default SignUp;
