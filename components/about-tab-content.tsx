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
  <div className="flex flex-col mt-6 lg:mt-8">
    {/* Display Content */}
    <HeadingTitle label={content.title} />
    <p className="text-base leading-[26px] text-[#333] mt-3 lg:mt-[18px]">
      {content.description}
    </p>

    <div className="flex gap-4 8 items-center mt-8">
      {content.buttonText && (
        <Button
          variant="mustardYellow"
          size="lg"
          aria-label="Learn more about us"
          className="w-[161px] h-14 text-base sm:text-lg leading-6 font-bold rounded-none"
        >
          {content.buttonText}
        </Button>
      )}
      {content.contactInfo && (
        <div className="flex gap-2">
          <Call />
          <p
            className={cn(
              "text-[#0A1425] text-sm sm:text-lg leading-6 font-bold",
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
