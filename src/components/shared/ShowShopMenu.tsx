"use client";

import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ShowShopMenu = ({ id }: { id: string | null }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className="size-10 flex justify-center items-center lg:hidden border border-raw-primary rounded-full cursor-pointer"
        onClick={toggleMenu}
      >
        <BsThreeDotsVertical size={24} className="text-raw-primary" />
      </div>
      <div
        className="w-64 p-6 space-y-6 absolute top-16 right-0 bg-white z-50 shadow-md rounded-lg transition-transform duration-200 ease-in-out transform-gpu flex flex-col"
        style={{ transform: showMenu ? "scale(1)" : "scale(0)" }}
      >
        <Link href={`/my-shop/${id}`} className="text-raw-primary text-base">
          My Shop
        </Link>

        <Link href="/create-business" className="text-raw-primary text-base">
          Create business
        </Link>
      </div>
    </>
  );
};

export default ShowShopMenu;
