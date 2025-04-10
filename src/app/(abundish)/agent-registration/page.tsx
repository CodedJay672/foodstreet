import CopyToClipboard from "@/components/shared/CopyToClipboard";
import { getCurrentUser } from "@/lib/actions/user.actions";
import Link from "next/link";

import { redirect } from "next/navigation";
import React from "react";

const AgentReg = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-up");
  }

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row py-16">
      <div className="flex-1 p-6">
        <h1 className="text-xl lg:text-2xl text-center lg:text-left">
          Agent details
        </h1>
        <div className="w-full flex flex-col items-center justify-center lg:justify-start lg:flex-row my-10 lg:my-0">
          <div className="flex justify-center flex-1">
            <p className="text-6xl lg:text-7xl font-bold text-center mr-1">
              43324
            </p>
            <CopyToClipboard text="43324" />
          </div>
          <div className="w-rull lg:w-80 mt-10 lg:mt-0 flex flex-col gap-1">
            <p className="text-base lg:text-lg">
              Name:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Email:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Phone:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Ref link:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
          </div>
        </div>
        <div className="w-full my-10">
          <h1 className="text-xl lg:text-2xl">Invited</h1>

          {/** visitors table show here */}
        </div>
      </div>

      <div className="w-full lg:w-md p-6">
        <h1 className="text-xl lg:text-2xl text-center lg:text-left">
          Earnings
        </h1>
        <div className="w-full space-y-2 flex flex-col justify-center lg:justify-start my-10">
          <div className="w-full flex-between">
            <p className="text-base lg:texw-full">Daily earning: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-between">
            <p className="text-base lg:text-lg w-full">Monthly earning: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold w-full text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-between">
            <p className="text-base lg:text-lg w-full">Total commission: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold w-full text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-between">
            <p className="text-base lg:text-lg w-full">Total withdrawals: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold w-full text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-between">
            <p className="text-base lg:text- w-full">Balance: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold w-full text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-between">
            <p className="text-base lg:text- w-full">Profit: </p>
            <span className="w-fulltext-lg lg:text-xl font-semibold w-full text-right">
              0.00
            </span>
          </div>

          <div className="w-full flex-center mt-3">
            <Link
              href="#"
              className="w-full lg:w-2/3 bg-raw-accent rounded-full p-2 text-light text-center"
            >
              withdraw
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentReg;
