"use client";

import FoodContext from "@/context/GlobalContext";
import { Models } from "node-appwrite";
import React, { useContext } from "react";
import DropdownMenu from "./DropdownMenu";

const UserDropdown = ({ user }: { user: Models.User<Models.Preferences> }) => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <>
      <div
        className="size-10 rounded-full bg-primary-light text-primary font-inter text-base p-1 flex justify-center items-center lg:hidden cursor-pointer"
        onClick={toggleUserDropdown}
      >
        {user?.name[0].toUpperCase()}
      </div>
      {showUserDropdown && <DropdownMenu user={user} />}
    </>
  );
};

export default UserDropdown;
