"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BottomBar = () => {
  const pathname = usePathname();

  const isActive = (label: string) => {
    return label.startsWith(pathname);
  };

  return (
    <div className="fixed left-0 bottom-0 w-full bg-white flex-between z-50 p-6 px-10">
      {NavLinks.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`text-sm flex-center flex-col gap-1 ${
            isActive(link.path) && "font-bold"
          }`}
        >
          <Image src={link.icon} alt={link.label} height={32} width={32} />
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
