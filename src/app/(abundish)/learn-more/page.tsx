import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCheckCircle } from "react-icons/hi2";
import { IoMdCash } from "react-icons/io";
import { MdBusiness, MdShop2, MdWallet } from "react-icons/md";

const LearnMore = () => {
  return (
    <section className="w-full">
      <div className="flex-between flex-col lg:flex-row gap-6 lg:gap-10 bg-gradient-to-b from-raw-primary-light to-subtle-light w-full lg:h-[calc(100vh-4rem)]">
        <div className="w-full max-w-6xl mx-auto flex-between flex-col lg:flex-row py-24 px-5 lg:py-10">
          <div className="w-full space-y-4 lg:space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold text-raw-primary text-center lg:text-left">
              Unlock Financial Freedom with Our Agency Model
            </h1>

            <p className="text-base lg:text-lg my-4 text-center lg:text-left">
              Join our financial empowerment project and be part of a movement
              creating sustainable livelihoods for 100,000,000 Nigerians. With
              Nigeria's booming food industry, this is your opportunity to build
              a profitable business and secure your future.
            </p>

            <Link
              href="/agent-registration"
              className="bg-raw-300 text-light bg-raw-primary px-4 py-2 rounded-full flex justify-center items-center lg:flex-none w-max mx-auto"
            >
              Register now
            </Link>
          </div>
          <div className="w-full flex-center mt-20 lg:mt-0">
            <Image src="/agent.jpg" alt="agent" width={400} height={100} />
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-base lg:text-lg px-3 py-1 bg-raw-primary-light text-raw-primary text-center w-max rounded-full mx-auto mt-24 mb-1">
          Why join
        </h2>

        <ul className="w-full max-w-96 flex flex-col gap-2 mt-6 mx-auto">
          <li className="w-full p-2 flex-center gap-3">
            <div className="size-10 rounded-full flex-center">
              <HiCheckCircle size={46} color="green" />
            </div>
            <span className="text-base font-medium flex-1">
              Earn a steady income from a high-demand industry
            </span>
          </li>
          <li className="w-full p-2 flex-center gap-3">
            <div className="size-10 rounded-full flex-center">
              <HiCheckCircle size={46} color="green" />
            </div>
            <span className="text-base font-medium flex-1">
              Master valuable sales skills that drive succes
            </span>
          </li>
          <li className="w-full p-2 flex-center gap-3">
            <div className="size-10 rounded-full flex-center">
              <HiCheckCircle size={46} color="green" />
            </div>
            <span className="text-base font-medium flex-1">
              Launch your own online store with ease
            </span>
          </li>
          <li className="w-full p-2 flex-center gap-3">
            <div className="size-10 rounded-full flex-center">
              <HiCheckCircle size={46} color="green" />
            </div>
            <span className="text-base font-medium flex-1">
              Make money directly from your phone—anytime, anywhere
            </span>
          </li>
          <li className="w-full p-2 flex-center gap-3">
            <div className="size-10 rounded-full flex-center">
              <HiCheckCircle size={46} color="green" />
            </div>
            <span className="text-base font-medium flex-1">
              Scale up and become a business owner with growth opportunities
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-6xl mx-auto flex-center flex-col gap-3 my-24">
        <h1 className="text-xl lg:text-2xl text-raw-primary font-bold ">
          Why Register?
        </h1>
        <p className="text-base font-normal text-center">
          Limited-Time Offer: ₦25,000 (Regular price: ₦65,000). <br />
          Your registration fee includes:
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 lg:px-10">
          <div className="w-full p-6 rounded-xl bg-pink-200 flex-center">
            <div className="size-12 flex-center">
              <MdShop2 size={26} className="text-raw-300" />
            </div>
            <span className="text-base font-medium flex-1">
              Online shop setup: Get your store up and running
            </span>
          </div>
          <div className="w-full p-6 rounded-xl flex-center bg-red-100">
            <div className="size-12 flex-center">
              <MdWallet size={26} className="text-raw-300" />
            </div>
            <span className="text-base font-medium flex-1">
              Wallet & bank setup: Seamless transactions
            </span>
          </div>
          <div className="w-full p-6 rounded-xl flex-center bg-blue-100">
            <div className="size-12 flex-center">
              <MdBusiness size={26} className="text-raw-300" />
            </div>
            <span className="text-base font-medium flex-1">
              Comprehensive training: Learn proven business strategies
            </span>
          </div>
          <div className="w-full p-6 rounded-xl flex-center bg-amber-100">
            <div className="size-12 flex-center">
              <IoMdCash size={26} className="text-raw-300" />
            </div>
            <span className="text-base font-medium flex-1">
              Exclusive access to cooperative loans: Grow your business with
              ease
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto my-24 flex-center flex-col gap-4 px-6">
        <p className="text-lg text-medium text-center">
          Seize this opportunity and start building your financial future today.
          Don't Miss Out!
        </p>

        <Link
          href="/agent-registration"
          className="bg-raw-300 text-light bg-raw-primary px-4 py-2 rounded-full flex-center"
        >
          Register now
        </Link>
      </div>
    </section>
  );
};

export default LearnMore;
