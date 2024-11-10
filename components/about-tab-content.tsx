import { roboto } from "@/fonts";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Call from "@/icons/call";
import React from "react";
import HeadingTitle from "./ui/heading-title";

interface ContentProps {
  title: string;
  description: string;
  buttonText?: string;
  contactInfo?: string;
}

interface TabContentProps {
  content: ContentProps;
}

export const TabContent: React.FC<TabContentProps> = ({ content }) => (
  <div className="flex flex-col mt-6 sm:mt-8 sm:gap-8 gap-[12px]">
    {/* Display Content */}
    <HeadingTitle label={content.title} />
    <p className="mt-[18px] text-[16px] leading-[26px] text-[#333]">
      {content.description}
    </p>

    <div className="flex gap-4 mt-[20px] sm:mt-[0px] sm:gap-8 items-center">
      {content.buttonText && (
        <Button
          variant="mustardYellow"
          size="lg"
          aria-label="Learn more about us"
          className="w-[161px] h-[56px] text-[16px] sm:text-[18px] leading-[24px] font-bold rounded-none"
        >
          {content.buttonText}
        </Button>
      )}
      {content.contactInfo && (
        <div className="flex gap-2">
          <Call />
          <p
            className={cn(
              "text-[#0A1425] text-[14px] sm:text-[18px] leading-[24px] font-bold",
              roboto.className
            )}
          >
            {content.contactInfo}
          </p>
        </div>
      )}
    </div>
  </div>
);
