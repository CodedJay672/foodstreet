"use client";

import React, { ReactNode, useEffect, useState } from "react";
import FoodContext from "./GlobalContext";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [foodType, setFoodType] = useState("");
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const storedType = localStorage.getItem("foodType")
      ? (localStorage.getItem("foodType") as string)
      : "cookedFood";

    setFoodType(storedType);
  }, []);

  const handleTypeChange = (t: string) => {
    setFoodType(t);
    localStorage.setItem("foodType", t);
  };

  const handleDropdownToggle = () => {
    setShowUserDropdown((prev) => !prev);
  };

  const handleEditProfileToggle = () => {
    setEditProfile((prev) => !prev);
  };

  return (
    <FoodContext.Provider
      value={{
        foodType,
        setFoodType: handleTypeChange,
        showUserDropdown,
        toggleUserDropdown: handleDropdownToggle,
        editProfile,
        toggleEditProfile: handleEditProfileToggle,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default ContextProvider;
