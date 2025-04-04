"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";

const NavLink = ({
  label,
  path,
  icon,
  linkIcon,
}: {
  label: string;
  path: string;
  icon?: string;
  linkIcon?: React.ReactNode;
}) => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return linkIcon ? pathname.includes(path) : pathname.endsWith(path);
  };

  return (
    <Link
      href={path}
      className={cn(
        `text-sm leading-7 font-normal font-inter space-y-1 py-1 px-4 hover:text-primary/60 transition-all ${
          linkIcon ? "text-left flex items-center gap-2" : "text-center"
        } gap-2`,
        {
          "text-primary border-b border-primary font-semibold hover:text-primary":
            isActive(path),
        }
      )}
    >
      {icon ? (
        <Image
          src={icon}
          alt={label}
          width={14}
          height={14}
          className="block lg:hidden object-contain"
        />
      ) : (
        <>{linkIcon}</>
      )}

      {label}
    </Link>
  );
};

export default NavLink;
