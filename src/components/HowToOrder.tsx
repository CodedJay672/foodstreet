import React from "react";
import IconCard from "./shared/IconCard";

const HowToOrder = () => {
  return (
    <section className="wrapper flex-center flex-col">
      <h1 className="text-4xl font-semibold">How To Order?</h1>
      <div className="flex-between flex-col lg:flex-row gap-24 mt-10">
        <div className="flex-center flex-col">
          <h1 className="text-lg text-primary font-semibold">01</h1>
          <IconCard icon="/lolipop.png" text="Choose your location" />
        </div>
        <div className="flex-center flex-col">
          <h1 className="text-lg text-primary font-semibold">02</h1>
          <IconCard icon="/bow.png" text="Choose what to eat" />
        </div>
        <div className="flex-center flex-col">
          <h1 className="text-lg text-primary font-semibold">03</h1>
          <IconCard icon="/pot-of-food.png" text="Make your first order" />
        </div>
        <div className="flex-center flex-col">
          <h1 className="text-lg text-primary font-semibold">04</h1>
          <IconCard icon="/house.png" text="Now your food is on the way" />
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
