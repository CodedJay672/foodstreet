"use client";

import React, { useContext } from "react";
import {
  HiCheckBadge,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCheckCircle,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocument,
  HiOutlineQuestionMarkCircle,
  HiOutlineQueueList,
  HiOutlineShieldCheck,
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiXMark,
} from "react-icons/hi2";
import NavLink from "./NavLink";
import SignOut from "./SignOut";
import FoodContext from "@/context/GlobalContext";
import Image from "next/image";

const DropdownMenu = () => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <div
      className={`w-full lg:hidden bg-black/70 fixed top-0 right-0 backdrop-blur-md transition-transform duration-300 ease-in-out transform-gpu ${
        showUserDropdown ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-4/5 h-screen bg-white space-y-4 place-self-end">
        <div className="h-1/4 p-6 pb-0 w-full bg-primary flex flex-col">
          <div className="flex-between w-full">
            <Image src="/Logo.png" alt="foodstreet" width={120} height={60} />
            <HiXMark
              size={24}
              className="text-light"
              onClick={toggleUserDropdown}
            />
          </div>
          <div className="flex-1 flex flex-col place-content-end">
            <p className="text-light text-xl font-bold text-left">Menu</p>
          </div>
        </div>

        <ul className="w-full space-y-6 pb-10 px-6 h-[calc(100vh-270px)] no-scrollbar overflow-y-scroll">
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="Become an agent"
              path="/agent-registration"
              linkIcon={
                <HiOutlineUserGroup size={24} className="text-primary" />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="Become a vendor"
              path="/create-business"
              linkIcon={
                <HiOutlineUserGroup size={24} className="text-primary" />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="FAQ"
              path={`#`}
              linkIcon={
                <HiOutlineQuestionMarkCircle
                  size={24}
                  className="text-primary"
                />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="About us"
              path={`#`}
              linkIcon={
                <HiOutlineChatBubbleOvalLeftEllipsis
                  size={24}
                  className="text-primary"
                />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="Contact us"
              path={`#`}
              linkIcon={
                <HiOutlineDevicePhoneMobile
                  size={24}
                  className="text-primary"
                />
              }
            />
          </li>
          <li className="flex items-center gap-6 px-5">
            <SignOut />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
