import { userEmailVerified } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const VerifyEmail = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string; secret: string }>;
}) => {
  const { secret, userId } = await searchParams;

  if (!secret || !userId) return null;

  await userEmailVerified(userId, secret);

  return (
    <section className="w-full min-h-screen flex-center flex-col">
      <div className="flex-center flex-col gap-4 w-full max-w-screen-md">
        <Image
          src="/assets/complete.svg"
          alt="completed"
          width={200}
          height={260}
        />
        <h1 className="text-xl lg:text-3xl text-center font-semibold">
          Verification Successful
        </h1>
        <p className="text-center">You can close this window.</p>
      </div>
    </section>
  );
};

export default VerifyEmail;
