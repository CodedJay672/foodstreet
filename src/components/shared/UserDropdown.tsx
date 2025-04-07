"use client";

import FoodContext from "@/context/GlobalContext";
import { Models } from "node-appwrite";
import React, { useContext } from "react";

const UserDropdown = ({ user }: { user: Models.User<Models.Preferences> }) => {
  const { toggleUserDropdown } = useContext(FoodContext);

  return (
    <>
      <div
        className="size-10 rounded-full bg-primary-light text-primary font-inter text-base p-1 flex justify-center items-center lg:hidden"
        onClick={toggleUserDropdown}
      >
        {user?.name[0].toUpperCase()}
      </div>
    </>
  );
};

export default UserDropdown;
