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
import { Models } from "node-appwrite";

const DropdownMenu = ({ user }: { user: Models.User<Models.Preferences> }) => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <div
      className={`w-full px-4 py-6 bg-white absolute top-0 right-0 z-50 lg:hidden space-y-4`}
    >
      <div className="min-h-10 w-full flex-between sticky top-0 left-0 border-b border-primary">
        <p className="text-base font-thin">Profile details</p>
        <HiXMark
          size={24}
          className="text-primary"
          onClick={toggleUserDropdown}
        />
      </div>
      <div className="w-full flex-center flex-col gap-4">
        <div className="size-24 rounded-full bg-primary-light flex-center">
          <p className="text-4xl font-bold text-primary">{user?.name[0]}</p>
        </div>
        <div className="w-full flex-center flex-col gap-1">
          <h2 className="text-lg lg:text-2xl font-semibold flex">
            {user?.name}
            {user?.emailVerification && (
              <HiCheckBadge size={20} className="text-primary ml-2" />
            )}
          </h2>
          <p className="text-base text-gray-500">{user?.email}</p>
        </div>

        <ul className="w-full space-y-6  pb-10 h-[calc(100vh-270px)] no-scrollbar overflow-y-scroll">
          <li className="w-full p-1" onClick={toggleUserDropdown}>
            <NavLink
              label="My profile"
              path={`/user/${user?.$id}`}
              linkIcon={<HiOutlineUser size={24} className="text-primary" />}
            />
          </li>
          <li className="w-full p-1" onClick={toggleUserDropdown}>
            <NavLink
              label="My Orders"
              path={`#`}
              linkIcon={
                <HiOutlineShoppingBag size={24} className="text-primary" />
              }
            />
          </li>
          <li className="w-full p-1" onClick={toggleUserDropdown}>
            <NavLink
              label="My Subscriptions"
              path={`#`}
              linkIcon={
                <HiOutlineCheckCircle size={24} className="text-primary" />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="My Watchlist"
              path={`#`}
              linkIcon={
                <HiOutlineQueueList size={24} className="text-primary" />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="Change password"
              path="/users/reset-password"
              linkIcon={
                <HiOutlineShieldCheck size={24} className="text-primary" />
              }
            />
          </li>
          <li className="flex items-center gap-6" onClick={toggleUserDropdown}>
            <NavLink
              label="Become an agent"
              path={`#`}
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
          <li className="flex items-center gap-6">
            <SignOut />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
