import { bebasNeue, roboto } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ImageComponent from "./ui/image";

interface FooterContent {
  id: number;
  icon: string;
  sectionTitle: string;
  details: Detail[];
}

interface Detail {
  value: string;
}

const footerContents: FooterContent[] = [
  {
    id: 1,
    icon: "/clock.svg",
    sectionTitle: "OPENING HOURS",
    details: [{ value: "Monday - Sunday" }, { value: "9:00 AM to 11:30 PM" }],
  },
  {
    id: 2,
    icon: "/phone.svg",
    sectionTitle: "LET'S TALK",
    details: [
      { value: "Phone: 1-800-222-4545" },
      { value: "Fax: 1-800-222-4545" },
    ],
  },
  {
    id: 3,
    icon: "/mail.svg",
    sectionTitle: "BOOK A TABLE",
    details: [
      { value: "Email: demo@website.com" },
      { value: "Support: support@website.com" },
    ],
  },
  {
    id: 4,
    icon: "/location.svg",
    sectionTitle: "OUR ADDRESS",
    details: [
      {
        value: "123 Street, New York City, United",
      },
      { value: "States Of America" },
    ],
  },
];

const FooterCards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-between">
      {footerContents.map((content) => (
        <div
          key={content.id}
          className="flex flex-col gap-6 items-center flex-1"
        >
          <ImageComponent
            src={content.icon || "/clock.svg"}
            alt="footer_card_icon"
            className="size-[26px]"
          />

          <div className="flex flex-col gap-[12px] items-center">
            <h2
              className={cn(
                "text-[24px] leading-[28px] tracking-[2.5px] font-medium  text-white",
                bebasNeue.className
              )}
            >
              {content.sectionTitle}
            </h2>

            <div>
              {content.details.map((detail) => (
                <p
                  key={detail.value}
                  className={cn(
                    "text-[16px] leading-[25px] font-[300] text-[#F7F8F9] text-center",
                    roboto.className
                  )}
                >
                  {detail.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterCards;
