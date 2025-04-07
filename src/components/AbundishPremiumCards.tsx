import Link from "next/link";
import React from "react";

const AbundishPremiumCards = () => {
  return (
    <section className="w-full max-w-6xl px-6 py-24 lg:px-16 mx-auto">
      <div className="w-full flex items-center flex-col gap-2">
        <h1 className="text-xl lg:text-2xl text-center text-raw-primary text-pretty font-semibold px-4">
          Membership Cards
        </h1>
        <p className="text-lg lg:text-xl text-pretty px-6 text-center">
          Enjoy our amazing membership card offers on Abundish
        </p>
      </div>

      <div className="w-full flex justify-around flex-col lg:flex-row items-center mt-10 gap-10">
        <div className="w-64 lg:h-60 p-6 bg-raw-200 rounded-xl bg-raw-accent-light">
          <div className="w-full  rounded-lg flex-center">
            <h1 className="text-lg lg:text-xl font-bold text-center">Silver</h1>
          </div>

          <div className="mt-4">
            <h1 className="text-base font-bold text-center">
              Monthly Discounts
            </h1>
            <p className="text-sm font medium text-center mt-4">
              Get Discounts on every purchase you make
            </p>
          </div>
        </div>

        <div className="w-64 lg:h-60 p-6 bg-raw-accent-light rounded-xl">
          <div className="w-full rounded-lg flex-center">
            <h1 className="text-lg lg:text-xl font-bold text-center">Gold</h1>
          </div>

          <div className="mt-4">
            <h1 className="text-base font-bold text-center">10% Commission</h1>
            <p className="text-sm font medium text-center mt-4">
              Earn 10% on every purchase made through your unique referral link
            </p>
          </div>
        </div>

        <div className="w-64 lg:h-60 p-6 rounded-xl bg-raw-accent-light">
          <div className="w-full rounded-lg flex-center">
            <h1 className="text-lg lg:text-xl font-bold text-center">
              Platnum
            </h1>
          </div>

          <div className="mt-4">
            <h1 className="text-base font-bold text-center ">
              E-Shop Ownership
            </h1>
            <p className="text-sm font medium text-center mt-4">
              Become an e-shop owner and manage your business from your phone
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex-center mt-10">
        <Link
          href="/abundish/subscription-page"
          className="bg-raw-accent-light px-6 py-2 rounded-lg"
        >
          Subscribe Now
        </Link>
      </div>
    </section>
  );
};

export default AbundishPremiumCards;
