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
          href="/my-shop"
          className="text-raw-300 font-medium text-base lg:text-lg mt-10 py-1 px-10 border border-raw-300 rounded-full hover:bg-raw-300 hover:text-white transition-all"
        >
          Create e-Shop
        </Link>
      </div>
    </section>
  );
};

export default VerifyEmail;
