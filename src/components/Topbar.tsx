import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCaretDown } from "react-icons/io5";

const Topbar = () => {
  return (
    <section className="w-full header-gradient">
      <nav className="px-16 py-4 flex-between">
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="food-street"
            width={132}
            height={32}
          />
        </Link>

        <div className="flex-center gap-6">
          {NavLinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className="text-base text-primary-100 flex-center gap-1"
            >
              {link.label}
              {(link.path.endsWith("services") ||
                link.path.endsWith("menu")) && (
                <IoCaretDown size={16} color="white" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex-center gap-2">
          <div className="size-10 flex-center rounded-full bg-secondary-100">
            <Image src="/assets/user.png" alt="user" width={26} height={26} />
          </div>
          <div className="size-10 flex-center rounded-full bg-secondary-100">
            <Image
              src="/assets/shopping-bag.png"
              alt="user"
              width={26}
              height={26}
            />
          </div>

          <Link
            href="/sign-in"
            className="py-2 px-10 bg-highlight-300 rounded-full shadow-md text-secondary-100 ml-2"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Topbar;
