import Image from "next/image";
import React from "react";
import PartnerCard from "./shared/PartnerCard";

const PartnerWithUs = () => {
  return (
    <section className="wrapper flex-center flex-col">
      <Image src="/Hand-Shake.png" alt="hand-shake" width={100} height={100} />

      <div className="mt-10 flex justify-between flex-col lg:flex-row space-y-10 lg:space-y-0">
        <PartnerCard
          img="/rider.png"
          name="rider"
          title="Become a rider"
          detail="Enjoy flexibility and competitive earnings
by delivering through Foodstreets."
        />
        <PartnerCard
          img="/partner.png"
          name="partner"
          title="Become a partner"
          detail="Grow your with Business with Foodstreets! 
Our technology can help you boost sales
and unlock new opportunities!"
        />
        <PartnerCard
          img="/career.png"
          name="career"
          title="Careers"
          detail="Ready for an exciting new challenge? If you're
ambitious, humble, and love working with
others, then we want to hear from you!"
        />
      </div>
    </section>
  );
};

export default PartnerWithUs;
