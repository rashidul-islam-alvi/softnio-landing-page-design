import Image from "next/image";
import React from "react";
import ImageComponent from "./ui/image";

const socialIcons = [
  {
    id: 1,
    iconUrl: "/facebook.svg",
    alt: "Facebook",
  },
  { id: 2, iconUrl: "/twitter.svg", alt: "Twitter" },
  { id: 3, iconUrl: "insta.svg", alt: "Instagram" },
  { id: 4, iconUrl: "link.svg", alt: "Linkedin" },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      {socialIcons.map((icon) => (
        <button
          key={icon.id}
          className="size-[36px] sm:size-[53.45px] hover:bg-white/30 duration-300  transition-all border border-white flex justify-center items-center rounded-full"
        >
          <ImageComponent
            src={icon.iconUrl}
            alt={icon.alt}
            className=" size-[16px] sm:size-[18px]"
          />
        </button>
      ))}
    </div>
  );
};

export default SocialLinks;
