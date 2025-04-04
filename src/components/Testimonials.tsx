import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonies } from "@/constants";
import Testimony from "./shared/Testimony";

const Testimonials = () => {
  return (
    <section className="wrapper relative overflow-hidden space-y-6 custom-scrollbar">
      <h2 className="text-xl lg:text-3xl font-semibold text-center">
        Our Clients Feedback
      </h2>

      <TestimonialCarousel>
        {testimonies.map((item, idx) => (
          <Testimony
            key={idx}
            name={item.name}
            position={item.position}
            testimony={item.testimony}
          />
        ))}
      </TestimonialCarousel>
    </section>
  );
};

export default Testimonials;
