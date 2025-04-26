"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) => {
  return (
    <section className="w-full flex-center min-h-screen">
      <div className="w-full max-w-screen-md flex-center flex-col">
        <Image
          src="/assets/robot-bro.svg"
          alt="error"
          width={200}
          height={200}
        />
        <h2 className="text-lg font-semibold">Something went wrong</h2>
        <p className="text-base font-medium text-center">{error.digest}</p>
        <p className="text-sm font-light text-center">{error.message}</p>

        <Button
          variant="outline"
          className="px-5 py-2 rounded-lg bg-raw-300 text-primary border border-primary cursor-pointer mt-6 hover:bg-subtle-light"
          onClick={() => reset()}
        >
          Refresh
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
