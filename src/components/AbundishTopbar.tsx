import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./shared/NavLink";
import { NavLinks } from "@/constants";

const AbundishTopbar = () => {
  return (
    <header className="w-full px-3 py-4 lg:px-10 flex-between sticky top-0 left-0 z-50 bg-raw-primary">
      <Link href="/" className="hidden lg:block flex-center">
        <Image src="/Logo.png" alt="foodstreet" width={100} height={50} />
      </Link>

      <nav className="hidden lg:flex justify-center items-center gap-6">
        {NavLinks.map((link, idx) => (
          <NavLink
            key={idx}
            label={link.label}
            path={link.path}
            icon={link.icon}
          />
        ))}
      </nav>
    </header>
  );
};

export default AbundishTopbar;
