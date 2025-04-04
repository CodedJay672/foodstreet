import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./shared/NavLink";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import UserDropdown from "./shared/UserDropdown";

const Topbar = async () => {
  const user = await getLoggedInUser();

  return (
    <header className="w-full px-3 py-1 lg:px-10 flex-between sticky top-0 left-0 z-50 bg-light">
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

      {user ? (
        <>
          <UserDropdown user={user} />
          <Link
            href={`/user/${user.$id}`}
            className="hidden rounded-full p-2 b lg:flex items-center gap-2"
          >
            <div className="size-10 rounded-full bg-primary-light text-primary p-1 flex-center">
              {user?.name[0].toUpperCase()}
            </div>
            <span className="text-sm text-gray-400 font-light">
              {user?.name}
            </span>
          </Link>
        </>
      ) : (
        <Link
          href="/sign-in"
          className="text-light font-inter text-base leading-7 px-4 py-2 rounded-full bg-primary"
        >
          Sign in
        </Link>
      )}
    </header>
  );
};

export default Topbar;
