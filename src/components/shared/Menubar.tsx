"use client";

import Image from "next/image";
import React, { useState } from "react";
import { defaultTabs } from "@/constants";
import { SidebarProps } from "../../../types";

const Menubar: React.FC<SidebarProps> = ({ tabs = defaultTabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

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
                ? "bg-secondary-200 text-primary-100 hover:bg-secondary-100 "
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
        <span className="text-sm text-gray-300">"no content to share"</span>
      </div>
    </aside>
  );
};

export default Menubar;
