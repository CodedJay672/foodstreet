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

  if (!secret || !userId) return null;

  await userEmailVerified(userId, secret);

  return (
    <section className="w-full min-h-screen flex-center flex-col gap-10">
      <Image
        src="/assets/complete.svg"
        alt="completed"
        width={200}
        height={260}
      />
      <div className="flex-center flex-col w-full max-w-screen-md">
        <h1 className="text-lg lg:text-xl text-center font-semibold">
          Verification Successful
        </h1>
        <p className="text-center">You can close this window.</p>

        <Link
          href="/"
          className="bg-raw-primary-light text-raw-primary px-4 py-1 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default VerifyEmail;
