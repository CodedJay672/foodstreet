import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <section className="w-full min-h-screen flex-center flex-col">
      <div className="w-full max-w-screen-md flex-center flex-col gap-2">
        <Image
          src="/Logo.png"
          alt="logo image"
          width={200}
          height={30}
          className="animate-pulse hidden lg:block"
        />

        <Loader2Icon
          size={24}
          className="text-primary lg:hidden animate-spin"
        />

        <p className="text-center font-inter font-medium">Loading...</p>
      </div>
    </section>
  );
};

export default Loading;
