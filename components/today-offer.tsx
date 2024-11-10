import Image from "next/image";
import React from "react";

const TodayOffer = () => {
  return (
    <div className="size-[120px] flex items-center justify-center bg-[#FEBF00] rounded-full shadow-custom-shadow">
      <Image
        src="/today-offer.png"
        alt="today-offer-banner"
        width={105.66}
        height={105.66}
        loading="lazy"
      />
    </div>
  );
};

export default TodayOffer;
