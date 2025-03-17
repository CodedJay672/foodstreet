"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="relative">
      {showMenu ? (
        <RiCloseLine
          size={42}
          color="white"
          className="cursor-pointer"
          onClick={handleShowMenu}
        />
      ) : (
        <RiMenu3Line
          size={42}
          color="white"
          className="cursor-pointer"
          onClick={handleShowMenu}
        />
      )}

      {showMenu && (
        <div className="absolute top-10 right-0 w-80 p-6 flex-center flex-col gap-2 bg-secondary-100 rounded-xl z-50">
          <Link
            href="#"
            className="w-full rounded-lg flex-center p-2 gap-2 hover:bg-secondary-400"
          >
            <div className="size-8 lg:size-10 flex-center rounded-full border border-secondary-200">
              <Image
                src="/assets/user.png"
                alt="user"
                width={26}
                height={26}
                className="size-5 lg:size-6"
              />
            </div>
            <span className="text-base font-medium">User Profile</span>
          </Link>

          <Link
            href="#"
            className="w-full rounded-lg flex-center p-2 gap-2 hover:bg-secondary-400"
          >
            <div className="size-8 lg:size-10 flex-center rounded-full border border-secondary-300">
              <Image
                src="/assets/shopping-bag.png"
                alt="user"
                width={26}
                height={26}
                className="size-5 lg:size-6"
              />
            </div>
            <span className="text-base font-medium">My Orders</span>
          </Link>

          <Link
            href="/sign-in"
            className="py-2 px-10 bg-highlight-300 rounded-full shadow-md text-secondary-100 mt-10"
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
