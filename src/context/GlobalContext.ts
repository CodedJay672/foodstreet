"use client";

import SeeMore from "@/components/shared/SeeMore";
import { createContext } from "react";

const FoodContext = createContext({
  foodType: "cookedFood",
  setFoodType: (t: string) => {},
  showUserDropdown: false,
  toggleUserDropdown: () => {},
  editProfile: false,
  toggleEditProfile: () => {},
  seeMore: false,
  handleSeeMore: () => {},
});

export default FoodContext;
