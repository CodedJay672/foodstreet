import React from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";
import Menubar from "./shared/Menubar";

const OurMenu = () => {
  return (
    <section className="w-full py-24">
      <div className="w-full max-w-screen-md mx-auto">
        <div className="flex-between flex-col lg:flex-row space-y-8">
          <div className="w-80">
            <h1 className="text-secondary-200 text-sm text-center lg:text-left font-bold">
              Our Menu
            </h1>
            <p className=" text-2xl lg:text-3xl font-bold text-pretty capitalize text-center lg:text-left">
              menu that always make you fall in love
            </p>
          </div>

          <div className="flex-center gap-6">
            <div className="w-max rounded-full hover:bg-secondary-200 group flex-center transition-all">
              <RiArrowLeftCircleLine
                size={44}
                className="size-9 lg:size-10 group-hover:fill-white text-secondary-300 transition-all cursor-pointer"
              />
            </div>
            <div className="w-max rounded-full hover:bg-secondary-200 group flex-center transition-all">
              <RiArrowRightCircleLine
                size={44}
                className="size-9 lg:size-10 group-hover:fill-white text-secondary-300 transition-all cursor-pointer"
              />
            </div>
          </div>
        </div>

        <Menubar />
      </div>
    </section>
  );
};

export default OurMenu;
