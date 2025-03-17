import Image from "next/image";
import React from "react";

const Vendor = () => {
  return (
    <section className="w-full py-24 flex-center">
      <div className="w-full max-w-screen-md flex-center gap-10 flex-col">
        <div className="w-full flex-col flex-center gap-4">
          <h1 className="text-base font-bold text-center text-secondary-300">
            VENDOR EXTRAORDINAIRRE
          </h1>
          <p className="text-5xl font-bold text-center w-[419px]">
            The Best Food Deal In Town
          </p>
        </div>

        <div className=" w-full flex-between">
          <div className="w-52 h-56 flex-between flex-col">
            <div className="flex-1 flex-center">
              <Image
                src="/assets/order.png"
                alt="order"
                width={134}
                height={117}
                className="object-fill"
              />
            </div>
            <div className="flex-center flex-col">
              <h1 className="text-2xl font-bold">Easy To Order</h1>
              <p className="text-base font-normal text-center">
                You only need a few steps in ordering food
              </p>
            </div>
          </div>
          <div className="w-52 h-56 flex-between flex-col">
            <div className="flex-1 flex-center">
              <Image
                src="/assets/delivery.png"
                alt="order"
                width={134}
                height={117}
              />
            </div>
            <div className="flex-center flex-col">
              <h1 className="text-2xl font-bold">Fastest Delivery</h1>
              <p className="text-base font-normal text-center">
                Delivery that is always on time even faster
              </p>
            </div>
          </div>
          <div className="w-52 h-56 flex-between flex-col">
            <div className="flex-1 flex-center">
              <Image
                src="/assets/quality.png"
                alt="order"
                width={134}
                height={117}
              />
            </div>
            <div className="flex-center flex-col">
              <h1 className="text-2xl font-bold">Best Quality</h1>
              <p className="text-base font-normal text-center">
                Not only fast for us, quality is also number one
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
