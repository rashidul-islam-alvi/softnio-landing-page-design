"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import TestimonialCard from "./testimonial-carousel-card";
import CarouselButtons from "./ui/carousel-buttons";
import CarouselNavigation from "./ui/carousel-navigation";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  feedback: string;
  avatarURL: string;
  avatarAlt: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Functions to control slide navigation
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <CarouselNavigation
        squareHeading="Crispy, Every Bite Taste"
        mainHeading="What Some of my Customers Say"
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
            slidesPerView: 1,
            spaceBetween: 32,
          },
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
        <CarouselButtons className="justify-center sm:hidden mt-4 sm:mt-0 " />
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;
