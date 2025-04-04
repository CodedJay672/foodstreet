import Image from "next/image";
import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import IconCard from "./shared/IconCard";

const QuoteSection = () => {
  return (
    <section className="w-full max-w-screen-md mb-10 mx-auto flex-center flex-col lg:flex-row gap-4">
      <div className="space-y-1 w-64">
        <FaQuoteRight size={61} />
        <h1 className="text-3xl font-semibold">
          The <span className="text-primary">Best</span> Food Deal in Town
        </h1>
      </div>
      <IconCard icon="/shopping-bag.png" text="Easy to order" />
      <IconCard icon="/food-truck.png" text="Easy to order" />
      <IconCard icon="/people-hold.png" text="Easy to order" />
    </section>
  );
};

export default QuoteSection;
