"use client";

import { createContext } from "react";

const FoodContext = createContext({
  foodType: "cookedFood",
  setFoodType: (t: string) => {},
});

export default FoodContext;
