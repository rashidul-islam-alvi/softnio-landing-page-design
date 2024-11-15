import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string; // Optional prop for additional class names
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "max-w-[346px] xs:max-w-[394px]  sm:max-w-[784px]  lg:max-w-[1336px] px-2 sm:px-8 md:px-2  mx-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
