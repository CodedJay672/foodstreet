import React from "react";
import DescWithImg from "./shared/DescWithImg";
import { TbFlagDiscount } from "react-icons/tb";
import { MdPercent } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { BsShop } from "react-icons/bs";

const AbundishOffers = () => {
  return (
    <section className="w-full py-24 flex-center flex-col bg-raw-100">
      <DescWithImg
        heading="subscribe"
        desc="Abundish is all about providing freshly cut vegetables and other foodstuff for individuals. Subscribe to get our Premium Card NOW!!"
      />

      <div className="w-full max-w-screen-md mx-auto px-6 py-24">
        <div className="w-full flex items-center flex-col gap-2">
          <h1 className="w-full text-center text-base lg:text-xl text-raw-300 flex-medium uppercase">
            unlock endless rewards
          </h1>
          <p className="text-3xl lg:text-5xl text-center text-pretty font-bold max-w-80">
            Abundish Premium Card
          </p>
          <p className="w-full text-pretty px-6 text-center">
            Maximize your savings and earnings with our exclusive premiun card.
          </p>
        </div>

        <div className="w-full flex justify-around flex-col lg:flex-row items-center mt-10 gap-10">
          <div className="w-64 lg:h-60 p-6 bg-raw-200 rounded-xl">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <RiHandCoinFill size={24} className="text-raw-300" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-white">
                Monthly Discounts
              </h1>
              <p className="text-sm font medium text-raw-100 text-center mt-4">
                Get Discounts on every purchase you make
              </p>
            </div>
          </div>
          <div className="w-64 lg:h-60 p-6 bg-raw-200 rounded-xl">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <MdPercent size={24} className="text-raw-300" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-white">
                10% Commission
              </h1>
              <p className="text-sm font medium text-raw-100 text-center mt-4">
                Earn 10% on every purchase made through your unique referral
                link
              </p>
            </div>
          </div>
          <div className="w-64 lg:h-60 p-6 bg-raw-200 rounded-xl">
            <div className="size-10 bg-raw-100/50 rounded-lg flex-center">
              <BsShop size={24} className="text-raw-300" />
            </div>

            <div className="mt-4">
              <h1 className="text-base font-bold text-center text-white">
                E-Shop Ownership
              </h1>
              <p className="text-sm font medium text-raw-100 text-center mt-4">
                Become an e-shop owner and manage your business from your phone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbundishOffers;
