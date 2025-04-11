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
    <section className="w-full h-screen flex-center">
      <div className="w-full p-4 lg:p-10 bg-light rounded-lg space-y-6">
        <h1 className="text-base lg:text-xl font-bold">Reset Password</h1>

        <div className="w-full">
          <PasswordResetForm userId={userId} secret={secret} />
        </div>
      </div>
    </section>
  );
};

export default Recovery;
