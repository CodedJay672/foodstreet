import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const Verify = () => {
  const user = getLoggedInUser();

  return (
    <section className="w-full flex-1 flex-center flex-col gap-6">
      <Image
        src="/assets/mailbox.svg"
        alt="completed"
        width={100}
        height={160}
        className="object-contain"
      />
      <div className="flex-center flex-col w-full max-w-screen-md">
        <h1 className="text-base lg:text-lg text-center font-semibold">
          An email has been sent!
        </h1>
        <p className="text-center">
          Check your inbox for your verification link.
        </p>
      </div>
    </section>
  );
};

export default Verify;
