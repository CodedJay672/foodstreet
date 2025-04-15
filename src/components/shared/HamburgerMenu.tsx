"use client";

import FoodContext from "@/context/GlobalContext";
import React, { useContext } from "react";
import { IoMenuOutline } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";

const HamburgerMenu = () => {
  const { showUserDropdown, toggleUserDropdown } = useContext(FoodContext);

  return (
    <>
      <div
        className="p-1 lg:hidden border border-light rounded-md ml-2"
        onClick={toggleUserDropdown}
      >
        <IoMenuOutline size={24} className="text-light" />
      </div>
      {showUserDropdown && <DropdownMenu />}
    </>
  );
};

export default HamburgerMenu;
