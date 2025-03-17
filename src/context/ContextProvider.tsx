"use client";

import React, { ReactNode, useEffect, useState } from "react";
import FoodContext from "./GlobalContext";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [foodType, setFoodType] = useState("");

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

  return (
    <FoodContext.Provider
      value={{
        foodType,
        setFoodType: handleTypeChange,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default ContextProvider;
