"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import CarouselCard from "./popular-food-carousel-card";
import CarouselNavigation from "./ui/carousel-navigation";
import CarouselButtons from "./ui/carousel-buttons";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  alt_text: string;
  description: string;
}

interface PopularCarouselProps {
  carouselItems: CarouselItem[];
}

const PopularCarousel = ({ carouselItems }: PopularCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Functions to control slide navigation
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <CarouselNavigation
        squareHeading="Crispy, Every Bite Taste"
        mainHeading="POPULAR FOOD ITEMS"
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // When window width is >= 390px
          391: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="w-full"
      >
        {carouselItems.concat(carouselItems).map((carouselItem) => (
          <SwiperSlide key={carouselItem.id}>
            <CarouselCard carouselItem={carouselItem} />
          </SwiperSlide>
        ))}
        <CarouselButtons className="justify-center sm:hidden mt-4 sm:mt-0 " />
      </Swiper>
    </>
  );
};

export default PopularCarousel;
