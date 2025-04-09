import PasswordResetForm from "@/components/PasswordResetForm";
import Back from "@/components/shared/Back";
import React from "react";
import { toast } from "sonner";

const Recovery = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string; secret: string }>;
}) => {
  const { userId, secret } = await searchParams;

  if (!userId || !secret) {
    return toast.error("Invalid link. Please try again.");
  }

  console.log(userId, secret);

  return (
    <section className="absolute inset-0 w-full h-screen flex-center bg-black/75 z-90">
      <div className="w-full lg:w-1/2 p-4 lg:p-10 bg-light rounded-lg space-y-6">
        <div className="w-full flex-between">
          <h1 className="text-base lg:text-xl font-bold">Reset Password</h1>
          <div className="w-16 p-1">
            <Back />
          </div>
        </div>

        <div className="w-full">
          <PasswordResetForm userId={userId} secret={secret} />
        </div>
      </div>
    </section>
  );
};

export default Recovery;
