import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import React from "react";

const Verify = () => {
  const user = getLoggedInUser();

  return (
    <section className="w-full min-h-screen flex-center flex-col">
      <div className="flex-center flex-col w-full max-w-screen-md">
        <Image
          src="/assets/mailbox.svg"
          alt="completed"
          width={200}
          height={260}
          className="object-contain"
        />
        <h1 className="text-xl lg:text-3xl text-center font-semibold mt-16">
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
