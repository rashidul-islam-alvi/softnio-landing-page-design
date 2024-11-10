import { bebasNeue } from "@/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface HeadingTitleProps {
  label: string;
  className?: string;
}

const HeadingTitle = ({ label, className }: HeadingTitleProps) => {
  return (
    <h2
      className={cn(
        "text-[40px] sm:text-[62px] leading-[48px] sm:leading-[62px] text-[#181818]",
        bebasNeue.className,
        className
      )}
    >
      {label}
    </h2>
  );
};

export default HeadingTitle;
