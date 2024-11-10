"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TabContent } from "./about-tab-content";
import { TabNavigation } from "./about-tab-navigation";
import ImageComponent from "./ui/image";
import MarketPlace from "./about-market-place";

interface TabContentProps {
  title: string;
  description: string;
  buttonText?: string;
  contactInfo?: string;
}

interface TabsProps {
  label: string;
  image: string;
  content: TabContentProps;
}

const tabs: TabsProps[] = [
  {
    label: "About",
    image: "/about-burger.png",
    content: {
      title: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.",
      buttonText: "ABOUT MORE",
      contactInfo: "+88 3426 739 485",
    },
  },
  {
    label: "Experience",
    image: "/hero-steak-image.png",
    content: {
      title: "Experience Content",
      description: "Details about experience go here.",
    },
  },
  {
    label: "Contact",
    image: "/about-burger.png",
    content: {
      title: "Contact Content",
      description: "Details about contact go here.",
    },
  },
];

const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("About");

  /* Find the content and image of the active tab */
  const activeTabData = tabs.find((tab) => tab.label === activeTab) || tabs[0];

  return (
    <div className="flex flex-col sm:flex-row sm:gap-20  gap-8">
      {/* Left side image */}
      <div className="flex-1 relative ">
        <MarketPlace />
        <ImageComponent
          src={activeTabData.image}
          alt={`${activeTabData.label} image`}
          className="h-[246.03px] sm:h-[460px] z-10"
        />
      </div>

      {/* Right side content */}
      <div className="flex-1">
        {/* Tab navigation */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={(label: string) => setActiveTab(label)}
        />

        {/* Tab content */}
        <TabContent content={activeTabData.content} />
      </div>
    </div>
  );
};

export default AboutTabs;
