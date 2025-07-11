"use client";

import FoodContext from "@/context/GlobalContext";
import React, { useContext } from "react";
import DropdownMenu from "./DropdownMenu";
import { RiMenu3Line } from "react-icons/ri";
import { Models } from "node-appwrite";

const HamburgerMenu = ({ user }: { user: Models.Document | null }) => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <>
      <div className="p-1 lg:hidden ml-2" onClick={toggleUserDropdown}>
        <RiMenu3Line size={44} className="text-light" />
      </div>
      {showUserDropdown && <DropdownMenu user={user} />}
    </>
  );
};

export default HamburgerMenu;
