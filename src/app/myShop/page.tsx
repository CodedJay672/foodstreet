import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyShop = async () => {
  const user = await getLoggedInUser();

  if (!user || !user.emailVerification) {
    return (
      <section className="w-full min-h-screen flex-center flex-col">
        <div className="w-full max-w-screen-md p-6 flex-center flex-col gap-10">
          <Image
            src="/assets/notify.svg"
            alt="notice"
            width={260}
            height={200}
          />
          <h1 className="text-raw-300 font-medium text-xl lg:text-2xl text-center text-pretty p-6">
            Only registered and verified users can create a shop
          </h1>

          <Link
            href="/sign-up"
            className="bg-raw-300 text-white px-16 py-1 rounded-full"
          >
            Create acount
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="m-full min-h-screen">
      <div className="w-full h-64 lg:h-60 flex-center">
        <h1 className="text-center">Shop banner</h1>
      </div>
    </section>
  );
};

export default MyShop;
