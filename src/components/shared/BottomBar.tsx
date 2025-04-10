"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomBar = () => {
  const pathname = usePathname();

  const isActive = (label: string) => {
    return label.endsWith(pathname);
  };

  return (
    <div className="fixed left-0 bottom-0 w-full bg-white flex justify-between items-center z-10 px-3 py-2 lg:hidden">
      {NavLinks.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`text-xs flex-center flex-col gap-1 ${
            isActive(link.path) &&
            "text-raw-primary bg-raw-primary-light p-2 rounded-lg font-thin"
          }`}
        >
          <Image
            src={link.icon}
            alt={link.label}
            height={20}
            width={20}
            className={`size-6 brightness-0 ${
              isActive(link.path)
                ? "stroke-raw-primary"
                : "stroke-raw-primary-light"
            }`}
          />
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
