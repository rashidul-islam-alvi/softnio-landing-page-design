import { roboto } from "@/fonts";
import { cn } from "@/lib/utils";
import React from "react";

interface TitleWithSquareProps {
  label: string;
  className?: string;
}

const TitleWithSquare = ({ label, className }: TitleWithSquareProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="size-[10px] bg-chili-red" />

      <h3
        className={cn(
          "text-[20px] font-bold leading-[32px] text-chili-red",
          roboto.className,
          className
        )}
      >
        {label}
      </h3>
    </div>
  );
};

export default TitleWithSquare;
