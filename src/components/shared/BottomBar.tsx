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
    <div className="fixed left-0 bottom-0 w-full bg-white flex justify-between items-center z-10 lg:hidden">
      {NavLinks.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`py-3 w-16 flex-center flex-col ${
            isActive(link.path) && "border-t-2 border-raw-primary"
          }`}
        >
          <Image
            src={link.icon}
            alt={link.label}
            height={24}
            width={24}
            className={`brightness-0 ${
              isActive(link.path)
                ? "stroke-raw-primary"
                : "stroke-raw-primary-light"
            }`}
          />

          <span
            className={`text-[10px] text-gray-600 mt-2 capitalize ${
              isActive(link.path) && "text-raw-primary font-bold"
            }`}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
