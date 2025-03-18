import React from "react";
import Image from "next/image";
import Link from "next/link";

const AbundishHero = () => {
  return (
    <section className={`w-full overflow-hidden bg-raw-300`}>
      <div className="w-full h-screen lg:max-h-[650px] lg:w-[1200px] mx-auto flex justify-between flex-col lg:flex-row lg:mt-16">
        <div className="flex justify-center flex-1 flex-col gap-4 p-10 lg:p-24 pr-0">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-secondary-100 ">
            Become an{" "}
            <span className="text-highlight-100 tracking-widest block">
              Abundish Agent
            </span>
          </h1>
          <p className="text-2xl lg:text-4xl font-bold text-secondary-100 text-pretty">
            Earn money from the comfort of your home
          </p>

          <Link
            href="#"
            className="border hover:bg-raw-100 hover:text-raw-200 transition-all border-raw-100 rounded-lg w-max py-2 px-6 text-raw-100"
          >
            Learn more
          </Link>
        </div>

        <div className="w-full flex-center flex-col">
          <Image
            src="/assets/abundish-hero.jpg"
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
