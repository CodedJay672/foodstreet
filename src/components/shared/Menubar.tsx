"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { defaultTabs } from "@/constants";
import { SidebarProps } from "../../../types";

const Menubar: React.FC<SidebarProps> = ({ tabs = defaultTabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const activeTabContent = useMemo(
    () => tabs.filter((tab) => tab.id === activeTab),
    [activeTab]
  );

  return (
    <aside className="w-full p-1 flex gap-6">
      {/* Tab Navigation */}
      <div className="w-max space-y-2 bord">
        {tabs.map((tab) => (
          <label
            key={tab.id}
            htmlFor={tab.id}
            className={`p-4 flex items-center gap-2 w-52 rounded-full hover:bg-secondary-200 hover:text-primary-100 ${
              activeTab === tab.id ? "bg-secondary-200 text-primary-100" : ""
            }`}
          >
            <Image
              src={tab.icon}
              alt={`${tab.title} menu`}
              width={40}
              height={40}
              className="rounded-full overflow-hidden"
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
            <span className="text-lg font-semibold">{tab.title}</span>
          </label>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 rounded-lg">{activeTabContent[0].content}</div>
    </aside>
  );
};

export default Menubar;
