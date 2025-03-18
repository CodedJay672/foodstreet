import React from "react";
import DescWithImg from "./shared/DescWithImg";

const AbundishOffers = () => {
  return (
    <section className="w-full py-24 flex-center flex-col space-y-10">
      <DescWithImg
        img="/assets/food-vendor.jpg"
        heading="subscribe"
        desc="Abundish is all about providing freshly cut vegetables and other foodstuff for individuals. Subscribe to get our Premium Card NOW!!"
        order
      />
      <DescWithImg
        img="/assets/food-vendor.jpg"
        heading="become a vendor"
        desc="Are you looking for another means to double your income stream? Sign up as an Abundish vendor to get an opportunity earn money from every shopping by order."
      />
    </section>
  );
};

export default AbundishOffers;
