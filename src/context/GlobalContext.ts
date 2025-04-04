"use client";

import { createContext } from "react";

const FoodContext = createContext({
  foodType: "cookedFood",
  setFoodType: (t: string) => {},
  showUserDropdown: false,
  toggleUserDropdown: () => {},
});

export default FoodContext;
