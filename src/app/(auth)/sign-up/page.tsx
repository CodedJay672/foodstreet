import AuthForm from "@/components/shared/AuthForm";
import { getCurrentUser } from "@/lib/data/user.data";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const SignUp = async () => {
  const user = await getCurrentUser();

  if (user) redirect("/");

  return (
    <section className="w-full flex-center flex-col gap-4">
      <Image src="/Logo.png" alt="foodstreet" width={120} height={60} />

      <div className="w-full flex-center flex-col gap-2 mt-8 lg:mt=10">
        <h1 className="text-xl lg:text-2xl font-bold text-raw-300 text-center">
          Sign Up
        </h1>
        <p className="text-base font-normal text-center">Enter details below</p>
      </div>

      <AuthForm type="SIGN_UP" />
    </section>
  );
};

export default SignUp;
