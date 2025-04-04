import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./shared/NavLink";

const Topbar = () => {
  return (
    <header className="w-full p-2 lg:px-10 flex-between sticky top-0 left-0 z-50 bg-light">
      <Link href="/" className="hidden lg:block flex-center">
        <Image
          src="/assets/Logo.png"
          alt="foodstreet"
          width={100}
          height={50}
        />
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

      <Link
        href="/sign-in"
        className="text-light font-inter text-base leading-7 px-4 py-2 rounded-full bg-primary"
      >
        Sign in
      </Link>
    </header>
  );
};

export default Topbar;
