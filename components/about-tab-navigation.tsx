import React from "react";
import { inter } from "@/fonts";
import { cn } from "@/lib/utils";

interface Tab {
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (label: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => (
  <div className="flex  border-b border-chili-red">
    {tabs.map((tab) => (
      <div
        key={tab.label}
        onClick={() => onTabClick(tab.label)}
        className={cn(
          `px-4 py-[6px] sm:justify-normal justify-center flex flex-1 sm:flex-none cursor-pointer text-sm text-[#333333] font-medium ${
            activeTab === tab.label ? "bg-chili-red text-white" : "font-normal"
          }`,
          inter.className
        )}
      >
        {tab.label}
      </div>
    ))}
  </div>
);
