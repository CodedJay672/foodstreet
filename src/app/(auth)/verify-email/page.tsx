import React from "react";
import { userEmailVerified } from "@/lib/actions/user.actions";
import Link from "next/link";
import Image from "next/image";

const VerifyEmail = async ({
  searchParams,
}: {
  searchParams: Promise<{ userId: string; secret: string }>;
}) => {
  const { secret, userId } = await searchParams;

  console.log(secret, userId);

  const response = await userEmailVerified(userId, secret);

  if (!response) {
    throw new Error("Verification failed.");
  }

  return (
    <section className="w-full flex-center flex-col gap-10">
      <Image
        src="/assets/complete.svg"
        alt="completed"
        width={200}
        height={260}
      />
      <div className="space-y-4 flex-center flex-col my-6">
        <h1 className="text-lg lg:text-xl text-center font-semibold">
          Verification Successful
        </h1>
        <p className="text-center">You can close this window.</p>
      </div>
      <Link
        href="/"
        className="bg-raw-primary-light text-raw-primary px-4 py-1 rounded-lg"
      >
        Go Home
      </Link>
    </section>
  );
};

export default VerifyEmail;
