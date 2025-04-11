"use client";

import FoodContext from "@/context/GlobalContext";
import React, { use } from "react";
import { Button } from "../ui/button";

const AboutSection = ({ text }: { text: string }) => {
  const { seeMore, handleSeeMore } = use(FoodContext);
  return (
    <div
      className={`w-full min-h-32 ${
        seeMore ? "h-auto" : "h-32"
      } flex-between flex-col`}
    >
      <p className="w-full text-pretty truncate line-clamp-5 text-left">
        {text}
      </p>
      <Button
        variant="outline"
        onClick={handleSeeMore}
        className="border-none text-raw-primary cursor-pointer hover:bg-light"
      >
        see {seeMore ? "less" : "more"}
      </Button>
    </div>
  );
};

export default AboutSection;
