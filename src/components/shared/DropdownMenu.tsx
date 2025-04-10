"use client";

import React, { use, useContext } from "react";
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

const DropdownMenu = () => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <div
      className={`w-full  bg-black/70 absolute top-0 right-0 z-50 lg:hidden  transition-all duration-300 backdrop-blur-3xl flex justify-end ${
        showUserDropdown
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="w-4/5 h-screen px-4 py-6 bg-white space-y-4">
        <div className="min-h-10 w-full flex-between sticky top-0 left-0">
          <p className="text-base font-thin">Menu</p>
          <HiXMark
            size={24}
            className="text-primary"
            onClick={toggleUserDropdown}
          />
        </div>

        <ul className="w-full space-y-6 pb-10 h-[calc(100vh-270px)] no-scrollbar overflow-y-scroll">
          {/* <li className="w-full p-1" onClick={toggleUserDropdown}>
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
            linkIcon={<HiOutlineQueueList size={24} className="text-primary" />}
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
        </li> */}

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
