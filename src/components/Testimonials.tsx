import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="w-max  flex mx-auto">
        <Image
          src="/assets/agent.png"
          alt="agent"
          width={439}
          height={296}
          className="object-cover"
        />
        <div className="w-[460px] p-2 pl-8 bg-highlight-200 flex flex-col gap-2">
          <h1 className="font-inter text-lg text-primary-100 uppercase">
            what they say
          </h1>

          <p className="text-3xl font-bold capitalize text-pretty max-w-[285px]">
            what our customers say about us
          </p>

          <p className="text-sm font-inter pr-24">
            FoodStreet is the best. Besides the many and deliciousmeals, the
            service is also very good. Especially in the very fast delivery. I
            highly recommend FoodStreet to all
          </p>

          <div className="flex items-center gap-2">
            <Image
              src="/assets/reviewer.png"
              alt="user image"
              width={54}
              height={54}
            />
            <div className="flex flex-col">
              <h1 className="text-base font-bold">Adeyemi Folusho</h1>
              <p className="leading-2">Food Enthusiast</p>
              <div className="flex gap-1 mt-[3px]">
                <IoStar size={16} className="fill-white" />{" "}
                <IoStar size={16} className="fill-white" />{" "}
                <IoStar size={16} className="fill-white" />{" "}
                <IoStar size={16} className="fill-white" />{" "}
                <IoStar size={16} className="fill-white" />{" "}
                <span className="text-sm font-normal">4.5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
