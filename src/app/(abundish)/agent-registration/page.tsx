import React from "react";
import Link from "next/link";
import CopyToClipboard from "@/components/shared/CopyToClipboard";
import { createAgent } from "@/lib/actions/agents.actions";
import { getCurrentUser } from "@/lib/data/user.data";
import { redirect } from "next/navigation";
import { Models } from "node-appwrite";

const AgentReg = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/sign-in");
  }
  const newAgent = await createAgent(user.$id);

  return (
    <section className="w-full max-w-6xl mx-auto  space-y-6 px-6 py-16">
      <div className="flex-1 p-10 space-y-6 bg-raw-primary-light rounded-lg shadow-md">
        <h1 className="text-sm text-center text-gray-400 font-light">
          Invite vendors and earn commission
        </h1>
        <div className="flex justify-center flex-1">
          <p className="text-6xl lg:text-7xl font-bold text-center mr-1 text-raw-primary">
            {newAgent?.refCode}
          </p>
          <CopyToClipboard text={newAgent?.refCode} />
        </div>
      </div>

      <div className="w-full max-w-md flex-center flex-col mt-10 lg:mt-0 space-y-1 mx-auto relative">
        <p className="text-base text-gray-400">
          Name: <span className="font-medium">{newAgent?.details?.name}</span>
        </p>
        <p className="text-base text-gray-400">
          Email: <span className="font-medium">{newAgent?.details?.email}</span>
        </p>
        <p className="text-base text-gray-400">
          Phone: <span className="font-medium">{newAgent?.details?.phone}</span>
        </p>

        <p className="w-full text-base bg-gray-100 py-1 px-6 truncate rounded-full text-gray-400 space-x-3">
          Ref link: <span className="font-medium">{newAgent?.refLink}</span>
        </p>

        <div className="absolute bottom-3 right-3">
          <CopyToClipboard text={newAgent?.refLink} />
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row justify-between mt-10">
        <div className="w-full p-6 order-2 lg:order-1">
          <h1 className="text-base lg:text-lg text-raw-primary font-medium">
            Invites
          </h1>
          <ul className="w-full mt-5 space-y-4">
            {newAgent?.referrals.length > 0 ? (
              newAgent.referrals.map((ref: Models.Document) => (
                <li
                  key={ref.$id}
                  className="w-full bg-raw-primary-light p-3 rounded-lg shadow-sm flex flex-col lg:flex-row justify-between"
                >
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm text-gray-400">Name: {ref.name}</p>
                    <p className="text-sm text-gray-400">Email: {ref.email}</p>
                    <p className="text-sm text-gray-400">Phone: {ref.phone}</p>
                  </div>
                </li>
              ))
            ) : (
              <li className="w-full p-3 text-center">
                <p className="text-sm text-gray-400">No invites yet</p>
              </li>
            )}
          </ul>
        </div>

        <div className="w-full lg:max-w-sm p-6 order-1 lg:order-2">
          <h1 className="text-base lg:text-lg text-raw-primary font-medium">
            Earnings
          </h1>
          <div className="w-full space-y-2 flex flex-col justify-center lg:justify-start my-10">
            <div className="w-full flex-between">
              <p className="text-sm w-full">Daily earning: </p>
              <span className="w-full text-sm font-medium text-right">
                0.00
              </span>
            </div>

            <div className="w-full flex-between">
              <p className="text-sm w-full">Monthly earning: </p>
              <span className=" text-sm font-medium w-full text-right">
                0.00
              </span>
            </div>

            <div className="w-full flex-between">
              <p className="text-sm w-full">Total commission: </p>
              <span className="w-full text-sm font-medium text-right">
                0.00
              </span>
            </div>

            <div className="w-full flex-between">
              <p className="text-sm w-full">Total withdrawals: </p>
              <span className="w-full text-sm font-medium text-right">
                0.00
              </span>
            </div>

            <div className="w-full flex-between">
              <p className="text-sm w-full">Balance: </p>
              <span className="w-full text-sm font-medium text-right">
                0.00
              </span>
            </div>

            <div className="w-full flex-between">
              <p className="text-sm w-full">Profit: </p>
              <span className="w-full text-sm font-medium text-right">
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
      </div>
    </section>
  );
};

export default AgentReg;
