import React from "react";
import Image from "next/image";
import Link from "next/link";

const AbundishHero = () => {
  return (
    <section className={`w-full flex-center`}>
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center lg:items-start gap-6 flex-col lg:flex-row">
        <div className="flex justify-center flex-1 flex-col gap-4 p-6 lg:p-24">
          <h1 className="text-4xl lg:text-5xl font-bold text-raw-primary">
            Your Fresh Farm Produce Subscription Service.
          </h1>
          <p className="text-base lg:text-lg font-normal text-pretty">
            Transform your kitchen with the finest locally sourced agricultural
            produce, delivered directly to your doorstep at a pocket-friendly
            rate.
          </p>

          <Link
            href="/learn-more"
            className="text-base bg-raw-primary text-light rounded-lg w-max py-2 px-6"
          >
            Learn more
          </Link>
        </div>

        <div className="w-max">
          <Image
            src="/hero-abundish.png"
            alt="foodstreet"
            height={700}
            width={400}
            className="object-contain grow-0 shink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AbundishHero;
