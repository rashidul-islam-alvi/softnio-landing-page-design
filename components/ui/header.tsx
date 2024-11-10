import React from "react";
import TitleWithSquare from "./heading-title-with-square";
import HeadingTitle from "./heading-title";
import { cn } from "@/lib/utils";

interface HeaderProps {
  squareHeadingTitle: string;
  mainHeadingTitle: string;
  subTitle?: string;
  mainHeadingTitleClassName?: string;
  squareHeadingTitleClassName?: string;
  subsubTitleClassName?: string;
}

const Header = ({
  squareHeadingTitle,
  mainHeadingTitle,
  subTitle,
  mainHeadingTitleClassName,
  squareHeadingTitleClassName,
  subsubTitleClassName,
}: HeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <TitleWithSquare
        label={squareHeadingTitle}
        className={squareHeadingTitleClassName}
      />
      <HeadingTitle
        label={mainHeadingTitle}
        className={mainHeadingTitleClassName}
      />

      {subTitle && subTitle?.length > 0 && (
        <p
          className={cn(
            "text-[16px] leading-[24px] mt-2 text-[#F7F8F9]",
            subsubTitleClassName
          )}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Header;
