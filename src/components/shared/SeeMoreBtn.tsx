"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const SeeMoreBtn = () => {
  return (
    <Button
      variant="outline"
      onClick={handleSeeMe}
      className="border-0 text-raw-300 cursor-pointer"
    >
      see {seeMore ? "less" : "more"}
    </Button>
  );
};

export default SeeMoreBtn;
