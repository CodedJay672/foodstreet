import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full relative h-98">
      <Image
        src="/assets/cta-banner.png"
        alt="foodstreet download"
        fill
        className="object-cover"
      />
      <div className="absolute bottom-4 left-72 z-10 w-77 p-4 flex flex-col gap-3">
        <h1 className="text-sm font-normal text-highlight-300">DOWNLOAD APP</h1>
        <p className="text-2xl font-bold">Get Started With FoodStreet Today!</p>
        <p className="text-xs font-bold text-pretty pr-12">
          Discover food wherever and whenever and get your food delivered
          quickly.
        </p>
        <button className="w-34 p-2 text-sm rounded-full bg-highlight-300 text-primary-100 uppercase">
          get the app
        </button>

        <Image
          src="/assets/app-download.png"
          alt="download foodstreet"
          width={185}
          height={29}
        />
      </div>
    </section>
  );
};

export default CTA;
