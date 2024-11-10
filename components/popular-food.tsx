"use client";

import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import CarouselButtons from "./ui/carousel-buttons";
import PopularCarousel from "./popular-food-carousel";
import Image from "next/image";
import ImageComponent from "./ui/image";

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  alt_text: string;
  description: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: "Vegetable Burger",
    image: "/burger.png",
    alt_text: "popular_food_burger",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    id: 2,
    title: "Spacial Pizza",
    image: "/pizza.png",
    alt_text: "popular_food_pizza",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    id: 3,
    title: "Spacial French fries",
    image: "/fries.png",
    alt_text: "popular_food_fries",
    description: "Barbecue Italian cuisine",
  },
  {
    id: 4,
    title: "Cuisine Chicken",
    image: "/chicken.png",
    alt_text: "popular_food_chicken",
    description: "Japanese Cuisine Chicken",
  },
];

const PopularFood = () => {
  return (
    <section className="bg-[#FBF7F2] relative">
      {/** background decorator image */}
      <div className="hidden sm:block absolute -left-[315px] bottom-[47px]">
        <ImageComponent
          src="/popular-food-decor.png"
          alt="popular_decorator_spring"
          className="w-[526.31px] h-[492.04px]"
        />
      </div>

      <MaxWidthWrapper>
        <div className="py-[32px] sm:py-[120px]  flex-col flex gap-[30px] sm:gap-[60px]">
          {/** swiper carousel */}
          <PopularCarousel carouselItems={items} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PopularFood;
