"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLink = ({
  label,
  path,
  icon,
}: {
  label: string;
  path: string;
  icon: string;
}) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.endsWith(path);
  };

  return (
    <Link
      href={path}
      className={cn(
        "text-sm leading-7 font-normal font-inter space-y-1 py-1 px-4 hover:text-primary/60 transition-all",
        {
          "text-primary border-b border-primary font-semibold hover:text-primary":
            isActive(path),
        }
      )}
    >
      <Image
        src={icon}
        alt={label}
        width={14}
        height={14}
        className="block lg:hidden object-contain"
      />

      {label}
    </Link>
  );
};

export default NavLink;
