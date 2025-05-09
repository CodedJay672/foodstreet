"use client";

import React, { useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const TestimonialCarousel = ({ children }: { children: React.ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: string) => {
    if (!carouselRef.current) return;

    if (direction === "right") {
      carouselRef.current.scrollLeft += carouselRef.current.clientWidth - 36;
    } else {
      carouselRef.current.scrollLeft -= carouselRef.current.clientWidth - 36;
    }
  };

  return (
    <>
      <section
        className="flex overflow-x-scroll no-scrollbar scroll-smooth relative w-full"
        ref={carouselRef}
      >
        {children}
      </section>
      <div className="flex-center gap-5 mt-10">
        <div
          className="size-9 rounded-full bg-primary flex-center cursor-pointer"
          onClick={() => handleScroll("left")}
        >
          <HiChevronLeft size={24} className="text-light" />
        </div>
        <div
          className="size-9 rounded-full bg-primary flex-center cursor-pointer"
          onClick={() => handleScroll("right")}
        >
          <HiChevronRight size={24} className="text-light" />
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
