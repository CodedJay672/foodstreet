"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { IoCaretDown } from "react-icons/io5";
import MobileMenu from "./shared/MobileMenu";
import FoodContext from "@/context/GlobalContext";

const Topbar = () => {
  const { foodType, setFoodType } = useContext(FoodContext);

  return (
    <section
      className={`w-full ${
        foodType === "cookedFood" ? "header-gradient" : "raw-header-gradient"
      } sticky top-0 left-0 z-50`}
    >
      <nav className="px-2 lg:px-16 py-4 flex-between">
        <Link href="/">
          <Image
            src="/assets/Logo.png"
            alt="food-street"
            width={132}
            height={32}
          />
        </Link>

        <div className="hidden lg:flex justify-center items-center  gap-6">
          {NavLinks.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className="text-base text-primary-100 flex-center gap-1"
            >
              {link.label}
              {(link.path.endsWith("sell") ||
                link.path.endsWith("abundish")) && (
                <IoCaretDown size={16} color="white" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="size-10 hidden lg:flex items-center justify-center rounded-full bg-secondary-100">
            <Image src="/assets/user.png" alt="user" width={26} height={26} />
          </div>
          <div className="size-10 hidden lg:flex items-center justify-center rounded-full bg-secondary-100">
            <Image
              src="/assets/shopping-bag.png"
              alt="user"
              width={26}
              height={26}
            />
          </div>

          <button
            className={`py-2 px-3 ${
              foodType === "cookedFood" ? "bg-raw-300" : "bg-highlight-300"
            } rounded-full animate-pulse duration-75 hover:animate-none shadow-md text-secondary-100 ml-2`}
            onClick={() => {
              if (foodType === "cookedFood") {
                setFoodType("rawFood");
              } else {
                setFoodType("cookedFood");
              }
            }}
          >
            {foodType === "cookedFood" ? "Raw Food" : "Cooked Food"}
          </button>

          {/* Mobile hamburger */}
          <MobileMenu />
        </div>
      </nav>
    </section>
  );
};

export default Topbar;
