import Image from "next/image";
import React from "react";

const Verify = () => {
  return (
    <section className="w-full min-h-screen bg-raw-300 flex-center">
      <div className="flex-center w-full max-w-screen-md">
        <Image
          src="/assets/mailbox.svg"
          alt="completed"
          width={300}
          height={260}
        />
        <h1 className="text-xl lg:text-3xl text-center font-semibold">
          Email Has been sent!
        </h1>
        <p className="text-center">
          Check your inbox for your verification link.
        </p>
      </div>
    </section>
  );
};

export default Verify;
