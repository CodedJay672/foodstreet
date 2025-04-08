import Image from "next/image";
import React from "react";

const Vendor = () => {
  return (
    <section className="wrapper px-6 flex-center gap-10 flex-col">
      <div className="w-full flex-col flex-center gap-1">
        <h1 className="text-3xl font-semibold text-center lg:max-w-md">
          MORE THAN <span className="text-primary">1,000</span> DISHES TO ORDER!
        </h1>
        <p className="text-base text-center">
          Welcome to The Biggest Network of Food Ordering & Delivery
        </p>
      </div>

      <div className=" w-full flex-between flex-col lg:flex-row lg:gap-4 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-32 lg:h-42 flex-center flex-col  bg-subtle-light px-1 py-4 rounded-lg">
          <Image
            src="/okra-soup.png"
            alt="order"
            width={108}
            height={108}
            className="w-72 lg:w-47 object-cover flex-center"
          />
          <h1 className="text-base font-medium">Okro Soup</h1>
        </div>

        <div className="w-full lg:w-32 lg:h-42 flex-center flex-col  bg-subtle-light px-1 py-4 rounded-lg">
          <Image
            src="/moi-moi.png"
            alt="order"
            width={108}
            height={108}
            className="w-72 lg:w-47 object-cover flex-center"
          />

          <h1 className="text-base font-medium">Moi Moi</h1>
        </div>

        <div className="w-full lg:w-32 lg:h-42 flex-between gap-3 flex-col  bg-subtle-light px-1 py-6 rounded-lg">
          <Image
            src="/fried-rice.png"
            alt="order"
            width={70}
            height={70}
            className="w-44 lg:w-20 object-cover flex-center"
          />

          <h1 className="text-base font-medium mt-4">Friedrice</h1>
        </div>

        <div className="flex-1 h-42 bg-subtle-light p-6 rounded-lg">
          <h1 className="text-base font-medium">
            Find <span className="text-primary">deals,</span>
            <span className="text-raw-primary"> free delivery</span>, and more
            from our restaurant partners.
          </h1>
          <Image
            src="/illustrations.png"
            alt="order"
            width={92.13}
            height={16.77}
            className="object-cover place-self-end"
          />
        </div>
      </div>
    </section>
  );
};

export default Vendor;
