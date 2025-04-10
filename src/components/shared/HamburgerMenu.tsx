"use client";

import FoodContext from "@/context/GlobalContext";
import React, { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";
import { Models } from "node-appwrite";

const HamburgerMenu = () => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);
  return (
    <>
      <div className="p-1 lg:hidden" onClick={toggleUserDropdown}>
        <IoMenuOutline size={30} className="text-light" />
      </div>
      {showUserDropdown && <DropdownMenu />}
    </>
  );
};

export default HamburgerMenu;
