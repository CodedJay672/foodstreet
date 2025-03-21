import Image from "next/image";
import React from "react";

const Operations = () => {
  return (
    <section className="pt-24 pb-10 w-full">
      <div className="w-full max-w-screen-md mx-auto">
        <h1 className="text-base lg:text-lg font-bold font-inter text-highlight-300 text-center">
          WE RUN ALL ERRANDS
        </h1>
        <p className="text-3xl lg:text-5xl font-bold font-inter text-center">
          Anything delivered
        </p>
        <div className="mt-10 flex justify-between flex-col lg:flex-row gap-16">
          <div className="w-[232px] h-[270px] flex-between flex-col space-y-2 mx-auto">
            <Image src="/assets/home.png" alt="home" width={140} height={82} />
            <div className="flex-center flex-col gap-1">
              <h1 className="text-base lg:text-lg font-bold font-inter text-highlight-300 text-center">
                WE RUN ALL ERRANDS
              </h1>
              <p className="text-sm lg:text-base font-regular font-inter text-center">
                You can order your favorite restaurant through us. We would
                deliver swiftly to your doorstep
              </p>
              <button className="explore-button flex-center">Explore</button>
            </div>
          </div>
          <div className="w-[232px] h-[270px] flex-between flex-col space-y-2 mx-auto">
            <div className="size-25 oveflow-hidden relative">
              <Image
                src="/assets/deliver.png"
                alt="home"
                width={147}
                height={147}
              />
            </div>
            <div className="flex-center flex-col gap-1">
              <h1 className="text-base lg:text-lg font-bold font-inter text-highlight-300 text-center uppercase">
                Swift Delivery
              </h1>
              <p className="text-sm lg:text-base font-regular font-inter text-center text-pretty">
                Faster than you think. Order and we deliver to wherever in
                minutes
              </p>
              <button className="explore-button flex-center">Explore</button>
            </div>
          </div>
          <div className="w-[232px] h-[270px] flex-between flex-col space-y-2 mx-auto">
            <Image src="/assets/cart.png" alt="home" width={89} height={104} />
            <div className="flex-center flex-col gap-1">
              <h1 className="text-lg font-bold font-inter text-highlight-300 text-center uppercase">
                Groceries & More
              </h1>
              <p className="text-sm font-regular font-inter text-center text-pretty">
                For anything you need, if it's in your city. Order it! We will
                deliver it.
              </p>
              <button className="explore-button flex-center">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
