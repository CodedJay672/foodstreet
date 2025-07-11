import React from "react";
import { MdPercent } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { BsShop } from "react-icons/bs";
import Link from "next/link";

const AbundishOffers = () => {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="w-full max-w-screen-md mx-auto px-6 py-24">
        <div className="w-full flex items-center flex-col gap-2">
          <h1 className="text-center text-3xl lg:text-4xl text-raw-primary flex-bold font-inter">
            Best Offers
          </h1>
          <p className="text-xl lg:text-2xl text-center text-pretty font-semibold px-4">
            Become a Vendor & Own the Biggest Online Food Store
          </p>
          <p className="text-base lg:text-xl text-pretty px-6 text-center mt-4">
            Unlock exclusive benefits—from setting up a shop to earning from
            food transactions across the country. Explore what awaits below.
          </p>
        </div>

        <div className="w-full max-w-6xl flex-between flex-col lg:flex-row mt-10 gap-10">
          <div className="w-64 lg:h-60 p-6 bg-raw-200 rounded-xl bg-raw-primary">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <RiHandCoinFill size={24} className="text-light" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-light">
                Monthly Discounts
              </h1>
              <p className="text-sm font medium text-light text-center mt-4">
                Get Discounts on every purchase you make
              </p>
            </div>
          </div>

          <div className="w-64 lg:h-60 p-6 bg-raw-primary rounded-xl">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <MdPercent size={24} className="text-light" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-light">
                10% Commission
              </h1>
              <p className="text-sm font medium text-light text-center mt-4">
                Earn 10% on every purchase made through your unique referral
                link
              </p>
            </div>
          </div>

          <div className="w-64 lg:h-60 p-6 rounded-xl bg-raw-primary">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <BsShop size={24} className="text-light" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-light">
                E-Shop Ownership
              </h1>
              <p className="text-sm font medium text-light text-center mt-4">
                Become an e-shop owner and manage your business from your phone
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex-center mt-10">
          <Link
            href="/abundish/subscription-page"
            className="bg-raw-primary text-light px-6 py-2 rounded-lg"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AbundishOffers;
