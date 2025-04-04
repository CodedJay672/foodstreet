import React from "react";
import SubscribeForm from "./SubscribeForm";

const CTA = () => {
  return (
    <section className="w-full flex-center flex-col lg:flex-row bg-primary-light gap-2 lg:gap-10 px-6 lg:px-24 py-24">
      <div className="space-y-1 p-6">
        <h3 className="text-2xl lg:text-3xl font-semibold">
          Subscribe to out newsletter
        </h3>
        <p className="text-base font-normal">
          Browse local restaurants and businesses for delivery by entering your
          address below.
        </p>
      </div>
      <SubscribeForm />
    </section>
  );
};

export default CTA;
