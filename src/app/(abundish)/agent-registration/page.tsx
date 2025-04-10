import CopyToClipboard from "@/components/shared/CopyToClipboard";
import { getCurrentUser } from "@/lib/actions/user.actions";

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
              Agent name:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Agent email:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Agent phone:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
            <p className="text-base lg:text-lg">
              Referral link:{" "}
              <span className="text-lg lg:text-xl font-semibold">
                name goes here
              </span>
            </p>
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-xl lg:text-2xl">Invited</h1>

          {/** visitors table show here */}
        </div>
      </div>

      <div className="w-full lg:w-2xs p-6">
        <h1 className="text-xl lg:text-2xl text-center lg:text-left">
          Earnings
        </h1>
        <div className="w-full space-y-2 flex flex-col justify-center lg:justify-start my-10 lg:my-0">
          <p>
            Daily earning: <span></span>
          </p>
          <p>
            Monthly earning: <span></span>
          </p>
          <p>
            Total commission: <span></span>
          </p>
          <p>
            Total withdrawals: <span></span>
          </p>
          <p>
            Balance: <span></span>
          </p>
          <p>
            Profit: <span></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgentReg;
