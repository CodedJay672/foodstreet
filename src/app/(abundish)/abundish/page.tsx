import AbundishHero from "@/components/AbundishHero";
import AbundishOffers from "@/components/AbundishOffers";
import CTA from "@/components/CTA";
import React from "react";

const Abundish = () => {
  return (
    <>
      <AbundishHero />
      <AbundishOffers />
      <div className="my-6 w-full"></div>
      <CTA />
    </>
  );
};

export default Abundish;
