import { bebasNeue, inter } from "@/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import ImageComponent from "./ui/image";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  alt_text: string;
  description: string;
}

interface CarouselCardProps {
  carouselItem: CarouselItem;
}

const CarouselCard = ({ carouselItem }: CarouselCardProps) => {
  return (
    <div className="bg-white p-8 w-full flex justify-center items-center flex-col">
      <ImageComponent
        src={carouselItem.image}
        alt={carouselItem.alt_text}
        className="size-[132px]"
        imageClassName="object-contain"
      />

      <div className=" w-[57px] h-1 bg-chili-red my-6" />
      <div className="flex flex-col justify-center items-center">
        <h2 className={cn("text-2xl font-bold leading-9", bebasNeue.className)}>
          {carouselItem.title}
        </h2>

        <p
          className={cn(
            "text-base leading-8 tracking-[-1.5%]",
            inter.className
          )}
        >
          {carouselItem.description}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
