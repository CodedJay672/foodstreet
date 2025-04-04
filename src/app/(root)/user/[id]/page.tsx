import NavLink from "@/components/shared/NavLink";
import SignOut from "@/components/shared/SignOut";

import Link from "next/link";
import React from "react";

import {
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
} from "react-icons/hi2";

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <section className="p-6 lg:p-24 min-h-screen w-full flex gap-4">
      <ul className="hidden lg:block w-52 space-y-6 mt-10 mb-24">
        <li className="w-full p-1">
          <NavLink
            label="My profile"
            path={`/user/${id}`}
            linkIcon={<HiOutlineUser size={24} className="text-primary" />}
          />
        </li>
        <li className="w-full p-1">
          <NavLink
            label="My Orders"
            path={`#`}
            linkIcon={
              <HiOutlineShoppingBag size={24} className="text-primary" />
            }
          />
        </li>
        <li className="w-full p-1">
          <NavLink
            label="My Subscriptions"
            path={`#`}
            linkIcon={
              <HiOutlineCheckCircle size={24} className="text-primary" />
            }
          />
        </li>
        <li className="flex items-center gap-6">
          <NavLink
            label="My Watchlist"
            path={`#`}
            linkIcon={<HiOutlineQueueList size={24} className="text-primary" />}
          />
        </li>
        <li className="flex items-center gap-6">
          <NavLink
            label="Change password"
            path={`#`}
            linkIcon={
              <HiOutlineShieldCheck size={24} className="text-primary" />
            }
          />
        </li>
        <li className="flex items-center gap-6">
          <NavLink
            label="Become an agent"
            path={`#`}
            linkIcon={<HiOutlineUserGroup size={24} className="text-primary" />}
          />
        </li>
        <li className="flex items-center gap-6">
          <NavLink
            label="FAQ"
            path={`#`}
            linkIcon={
              <HiOutlineQuestionMarkCircle size={24} className="text-primary" />
            }
          />
        </li>
        <li className="flex items-center gap-6">
          <NavLink
            label="My Subscriptions"
            path={`#`}
            linkIcon={<HiOutlineDocument size={24} className="text-primary" />}
          />
        </li>
        <li className="flex items-center gap-6">
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
        <li className="flex items-center gap-6">
          <NavLink
            label="Contact us"
            path={`#`}
            linkIcon={
              <HiOutlineDevicePhoneMobile size={24} className="text-primary" />
            }
          />
        </li>
        <li className="flex items-center gap-6">
          <SignOut />
        </li>
      </ul>
    </section>
  );
};

export default UserProfile;
