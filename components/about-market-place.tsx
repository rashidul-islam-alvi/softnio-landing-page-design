import React from "react";
import ImageComponent from "./ui/image";

const MarketPlace = () => {
  return (
    <div className="flex justify-center items-center w-[128.99px] h-[73.14px] rounded-[10.7px] sm:w-[241.17px] sm:h-[136.75px] sm:rounded-[20px] bg-white absolute left-[12.84px] sm:left-[24px] top-[16.18px] sm:top-[30.25px] z-20">
      <div className="flex gap-[5.5px] sm:gap-[10.15px] justify-center items-center px-[12.5px]">
        <div className="size-[50.39px] relative sm:size-[94.21px] flex-1 sm:flex-none sm:border-[5px] border-[3px] rounded-full border-[F1F1F1]  flex justify-center items-center">
          <div className="absolute">
            <ImageComponent
              src="/elipses.png"
              alt="elipses"
              className="size-[50.39px] sm:size-[94.21px] z-10"
            />
            <ImageComponent
              src="/e2.png"
              alt="elipses_two"
              className="sm:size-[16.38px] size-[8.76px] absolute z-20 top-[4px] sm:top-[8px] left-[4px]"
            />
          </div>

          <h2 className="text-[13.91px] sm:text-[26px] leading-[116%] text-[#181818] font-bold">
            30+
          </h2>
        </div>
        <div className="flex-1 sm:flex-none">
          <h2 className="text-[8.56px] sm:text-[16px] font-semibold leading-[147.5%]">
            Market <br /> Experiences
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
