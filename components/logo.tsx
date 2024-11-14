import { poppins } from "@/fonts";
import LogoIcon from "@/icons/logo-icon";
import { cn } from "@/lib/utils";
import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-[6px]  items-center">
      <LogoIcon />
      <h2
        className={cn(
          "text-[28.44px] leading-[28.4px] text-white font-medium",
          poppins.className
        )}
      >
        Restau<span className="font-normal">rant</span>
      </h2>
    </div>
  );
};

export default Logo;
