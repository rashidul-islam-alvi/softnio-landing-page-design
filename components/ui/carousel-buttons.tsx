"use client";

import React from "react";
import { Button } from "./button";
import LeftArrow from "@/icons/left-arrow";
import RightArrow from "@/icons/right-arrow";
import { cn } from "@/lib/utils";
import { useSwiper } from "swiper/react";

interface CarouselButtonsProps {
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

const CarouselButtons = ({
  className,
  onNext,
  onPrev,
}: CarouselButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={cn("flex gap-8 mb-2", className)}>
      <Button
        onClick={() => (onPrev ? onPrev && onPrev() : swiper.slidePrev())}
        variant="icon"
        size="icon"
        className="shadow-icon-shadow hover:bg-chili-red/20 duration-300 transition-all ease-in-out"
        aria-label="Previous slide"
      >
        <LeftArrow />
      </Button>
      <Button
        onClick={() => (onNext ? onNext && onNext() : swiper.slideNext())}
        variant="icon"
        size="icon"
        className="shadow-icon-shadow hover:bg-chili-red/20 duration-300 transition-all"
        aria-label="Next slide"
      >
        <RightArrow />
      </Button>
    </div>
  );
};

export default CarouselButtons;
