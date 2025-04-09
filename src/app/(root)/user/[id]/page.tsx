import NavLink from "@/components/shared/NavLink";
import SignOut from "@/components/shared/SignOut";
import UserProfileDetails from "@/components/UserProfileDetails";
import { getCurrentUser } from "@/lib/actions/user.actions";
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

  const user = await getCurrentUser(id);

  return (
    <section className="p-6 lg:p-24 min-h-screen w-full flex gap-4 py-10">
      <ul className="hidden lg:block w-72 space-y-6">
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
            path="/user/orders"
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
            path="/user/reset-password"
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
      <UserProfileDetails user={user!} />
    </section>
  );
};

export default UserProfile;
