"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const Back = () => {
  const router = useRouter();

  return (
    <Button
      variant="link"
      className="text-sm font-medium text-primary hover:underline"
      onClick={() => router.back()}
    >
      <HiOutlineChevronLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
};

export default Back;
