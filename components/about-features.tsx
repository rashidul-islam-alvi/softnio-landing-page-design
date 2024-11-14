import { bebasNeue, inter } from "@/fonts";
import Cube from "@/icons/cube";
import Medal from "@/icons/medal";
import ShoppingBag from "@/icons/shopping-bag";
import { cn } from "@/lib/utils";
import React from "react";

interface FeatureProps {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    id: 1,
    icon: <Cube />,
    title: "Fast Delivery",
    description: "Within 30 minutes",
  },
  {
    id: 2,
    icon: <Medal />,
    title: "Absolute Dining",
    description: "Best buffet restaurant",
  },
  {
    id: 3,
    icon: <ShoppingBag />,
    title: "Pickup Delivery",
    description: "Grab your food order",
  },
];

const AboutFeatures: React.FC = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2  lg:flex  lg:flex-row gap-8 mt-[74px]">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex lg:w-[440px] gap-4 items-center lg:justify-normal sm:justify-center bg-white ${
            feature.id === 3 && "col-span-2 "
          }`}
        >
          <div className="size-[70px] sm:size-[90px] rounded-full flex items-center shadow-custom-shadow-two justify-center">
            <div className="size-[31.1px] lg:size-[40px]">{feature.icon}</div>
          </div>
          <div>
            <h3
              className={cn(
                "sm:text-[30px] text-[24px] leading-[36px] mb-[2px] text-[#0A1425] font-bold",
                bebasNeue.className
              )}
            >
              {feature.title}
            </h3>
            <p
              className={cn(
                "text-[18px] sm:text-[20px] leading-[32px] tracking-[-1.5%] text-[#0A1425]",
                inter.className
              )}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;
