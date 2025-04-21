import React from "react";
import Image from "next/image";
import Link from "next/link";

const AbundishHero = () => {
  return (
    <section className={`w-full flex-center`}>
      <div className="w-full max-w-6xl mx-auto flex-center gap-6 lg:gap-1 flex-col lg:flex-row">
        <div className="flex justify-center flex-1 flex-col gap-4 px-6 py-10 lg:p-16 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-raw-primary capitalize">
            Become Abundish Agent and earn money from your home
          </h1>
          <p className="text-base lg:text-lg font-normal text-pretty text-gray-600">
            Foodstreet Empowers{" "}
            <span className="text-xl font-bold text-raw-primary">
              1,000,000 Youths
            </span>{" "}
            with jobs. Join our transformative initiative in the nation's
            largest food economy and start earning income today.
          </p>

          <div className="w-full flex justify-between bg-raw-primary-light gap-6 p-6 my-6 rounded-lg">
            <div className="w-full flex justify-between flex-col">
              <h3 className="text-sm font-medium mb-1">Agents</h3>
              <p className="text-xs text-gray-600">
                Earn up to 2 million in mtching bonus
              </p>
            </div>
            <div className="w-full flex justify-between flex-col">
              <h3 className="text-sm font-medium mb-1">Vendors</h3>
              <p className="text-xs text-gray-600">
                Own a shop. Earn fom all food deals in millions
              </p>
            </div>
            <div className="w-full flex justify-between flex-col">
              <h3 className="text-sm font-medium mb-1">
                Abundish premium card.
              </h3>
              <p className="text-xs text-gray-600">
                Abundish premium card. Activate your online store
              </p>
            </div>
          </div>

          <Link
            href="/learn-more"
            className="text-base bg-raw-primary text-light rounded-lg w-max py-2 px-6"
          >
            Join Now
          </Link>
        </div>

        <div className="w-full h-96 lg:h-130 lg:w-120 relative mt-10 p-1 lg:p-0 lg:mt-0 rounded-b-3xl">
          <Image
            src="/hero-abundish.png"
            alt="foodstreet"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AbundishHero;
