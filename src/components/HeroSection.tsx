import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="full h-screen max-h-[650px] header-gradient overflow-hidden">
      <div className="w-[1200px] mx-auto flex justify-between mt-16">
        <div className="flex flex-col gap-4 p-24 pr-0">
          <div className="w-42 h-8 rounded-full flex-center bg-secondary-100">
            <span className="text-secondary-200 text-sm font-normal mr-2">
              More than Fast
            </span>
            <Image
              src="/assets/food-icon.png"
              alt="food street icon"
              width={20}
              height={20}
            />
          </div>
          <h1 className="text-6xl font-extrabold text-secondary-100 ">
            Your{" "}
            <span className="text-highlight-100 tracking-widest block">
              Best Plug
            </span>
          </h1>
          <p className="text-4xl font-bold text-secondary-100">
            For Your Local Food
          </p>
          <div className="flex-center w-max gap-1">
            <div className="size-2 rounded-full bg-secondary-100" />
            <div className="w-10 h-2 rounded-full bg-secondary-100" />
            <div className="size-2 rounded-full bg-secondary-100" />
            <div className="size-2 rounded-full bg-secondary-100" />
          </div>
        </div>

        <div className="flex-center flex-col">
          <Image
            src="/assets/Container.png"
            alt="foodstreet"
            height={900}
            width={700}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
