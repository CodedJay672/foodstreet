"use client";

import Image from "next/image";
import React, { useContext, useMemo, useState } from "react";
import { defaultTabs } from "@/constants";
import { SidebarProps } from "../../../types";
import FoodContext from "@/context/GlobalContext";

const Menubar: React.FC<SidebarProps> = ({ tabs = defaultTabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const { foodType, setFoodType } = useContext(FoodContext);

  const activeTabContent = useMemo(
    () => tabs.filter((tab) => tab.id === activeTab),
    [activeTab]
  );

  return (
    <aside className="w-full p-1 flex flex-col lg:flex-row gap-24 lg:gap-6 mt-10">
      {/* Tab Navigation */}
      <div className="w-full flex-center flex-row lg:flex-col flex-wrap lg:w-max space-y-2">
        {tabs.map((tab) => (
          <label
            key={tab.id}
            htmlFor={tab.id}
            className={`p-2 lg:p-4 flex flex-col lg:flex-row items-center gap-2 w-32 lg:w-52 rounded-lg lg:rounded-full  ${
              activeTab === tab.id
                ? foodType === "cookedFood"
                  ? "bg-secondary-200 text-primary-100"
                  : "bg-raw-300 text-primary-100"
                : foodType === "cookedFood"
                ? "hover:bg-secondary-100 hover:text-secondary-200"
                : "hover:bg-raw-100 hover:text-raw-200"
            }`}
          >
            <Image
              src={tab.icon}
              alt={`${tab.title} menu`}
              width={40}
              height={40}
              className="size-8 lg:size-10 rounded-full overflow-hidden"
            />
            <input
              id={tab.id}
              type="radio"
              name="menu"
              value={tab.id}
              checked={activeTab === tab.id}
              onChange={(e) => setActiveTab(e.target.value)}
              className="hidden"
            />
            <span className="text-sm lg:text-lg font-semibold">
              {tab.title}
            </span>
          </label>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex-center h-80 rounded-lg">
        <span className="text-sm text-gray-300">
          {activeTabContent[0].content}
        </span>
      </div>
    </aside>
  );
};

export default Menubar;
