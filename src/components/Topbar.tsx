import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./shared/NavLink";
import { getLoggedInUser } from "@/lib/actions/user.actions";

import HamburgerMenu from "./shared/HamburgerMenu";

const Topbar = async () => {
  const user = await getLoggedInUser();

  return (
    <>
      <header className="w-full px-3 py-4 lg:px-10 flex-between sticky top-0 left-0 z-50 bg-primary">
        <Link href="/" className="hidden lg:block flex-center">
          <Image src="/Logo.png" alt="foodstreet" width={130} height={50} />
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

        <div className="flex-center gap-1">
          {user ? (
            <div className="size-10 flex-center bg-primary-light rounded-full">
              <h1 className="text-primary text-2xl font-semibold">
                {user.name[0]}
              </h1>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="py-1 px-3 rounded-full text-light border border-light"
            >
              Sign In
            </Link>
          )}
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
};

export default Topbar;
