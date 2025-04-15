import Image from "next/image";
import React from "react";
import LocationForm from "./shared/LocationForm";

const HeroSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto p-4 lg:p-6 flex-between flex-col lg:flex-row lg:gap-32">
      <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
        <h1 className="text-4xl lg:text-6xl font-inter font-semibold text-pretty">
          Your Best Plug For Your Local Food
        </h1>
        <p className="text-lg my-4">
          Foodstreets at your doorstep. Why starve when you have us. Your hunger
          partner. Straight out of the oven to your doorstep.{" "}
        </p>
        <LocationForm />
      </div>
      <div className="w-full lg:w-1/2 h-118 p-1 relative">
        <Image
          src="/hero-food.png"
          alt="hero"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
