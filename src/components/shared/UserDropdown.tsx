"use client";

import FoodContext from "@/context/GlobalContext";
import Link from "next/link";
import { Models } from "node-appwrite";
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

const UserDropdown = ({ user }: { user: Models.User<Models.Preferences> }) => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <>
      <div
        className="size-10 rounded-full bg-primary-light text-primary font-inter text-base p-1 flex justify-center items-center lg:hidden"
        onClick={toggleUserDropdown}
      >
        {user?.name[0].toUpperCase()}
      </div>
      {showUserDropdown && (
        <div className="w-full p-10 min-h-screen flex-center flex-col absolute top-0 left-0 bg-light z-50 gap-24 lg:hidden">
          <div className="min-h-10 w-full flex-between flex-shrink-0 ">
            <p className="text-base font-thin">Profile details</p>
            <HiXMark
              size={24}
              className="text-primary"
              onClick={toggleUserDropdown}
            />
          </div>
          <div className="w-full flex-center flex-col gap-4">
            <div className="size-44 rounded-full bg-primary-light flex-center">
              <p className="text-9xl font-bold text-primary">{user?.name[0]}</p>
            </div>
            <div className="w-full flex-center flex-col gap-1">
              <h2 className="text-2xl font-semibold flex">
                {user?.name}
                {user?.emailVerification && (
                  <HiCheckBadge size={20} className="text-primary ml-2" />
                )}
              </h2>
              <p className="text-lg text-gray-500 font-medium">{user?.email}</p>
            </div>

            <ul className="block lg:hidden w-full space-y-6 mt-10  mb-24 overflow-y-scroll">
              <li className="w-full p-1" onClick={toggleUserDropdown}>
                <NavLink
                  label="My profile"
                  path={`/user/${user?.$id}`}
                  linkIcon={
                    <HiOutlineUser size={24} className="text-primary" />
                  }
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
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
                <NavLink
                  label="My Watchlist"
                  path={`#`}
                  linkIcon={
                    <HiOutlineQueueList size={24} className="text-primary" />
                  }
                />
              </li>
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
                <NavLink
                  label="Change password"
                  path={`#`}
                  linkIcon={
                    <HiOutlineShieldCheck size={24} className="text-primary" />
                  }
                />
              </li>
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
                <NavLink
                  label="Become an agent"
                  path={`#`}
                  linkIcon={
                    <HiOutlineUserGroup size={24} className="text-primary" />
                  }
                />
              </li>
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
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
                <Link
                  href="#"
                  className="flex items-center gap-6"
                  onClick={toggleUserDropdown}
                >
                  <span className="text-lg font-thin">FAQ</span>
                </Link>
              </li>
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
                <NavLink
                  label="My Subscriptions"
                  path={`#`}
                  linkIcon={
                    <HiOutlineDocument size={24} className="text-primary" />
                  }
                />
              </li>
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
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
              <li
                className="flex items-center gap-6"
                onClick={toggleUserDropdown}
              >
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
      )}
    </>
  );
};

export default UserDropdown;
