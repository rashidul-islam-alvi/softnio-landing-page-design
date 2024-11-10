import { bebasNeue, roboto } from "@/fonts";
import { Comma, Play } from "@/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ImageComponent from "./ui/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  feedback: string;
  avatarURL: string;
  avatarAlt: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row-reverse ">
      {/** testimonial video */}
      <div className="relative">
        <ImageComponent
          src="/t-video.jpg"
          alt="testimonial_video"
          className="h-[240px] w-full sm:w-[763.6px] sm:h-full"
        />

        <div className="absolute top-[45%] left-[40%] sm:left-[45%]">
          <Play />
        </div>
      </div>
      {/** testimonial  feedback */}
      <div className="p-[25px] sm:px-[85.13px] sm:py-[71.87px] relative bg-mustard-yellow ">
        <div className="absolute top-[25px] left-[25px] sm:left-[85.13px] sm:top-[71.87px] ">
          <Comma />
        </div>
        <p
          className={cn(
            "text-[18px] sm:text-[20px] sm:leading-[34px] leading-7 text-[#0A1425] pl-[19px] sm:pl-[26px] pt-[20px]  ",
            roboto.className
          )}
        >
          {testimonial.feedback}
        </p>

        <div className="mt-10 sm:mt-[164px] flex  justify-between border-b border-black">
          {/** testimonial  author info */}
          <div>
            <h2
              className={cn(
                "text-[18px] leading-5 font-bold mb-[3px]",
                bebasNeue.className
              )}
            >
              {testimonial.name}
            </h2>
            <p className={cn("text-[14px] leading-[13.3px]", roboto.className)}>
              {testimonial.location}
            </p>
          </div>

          {/** testimonial  author avatar*/}
          <div className="relative pb-[18px]">
            <ImageComponent
              className="size-[39.62px]"
              src={testimonial.avatarURL}
              alt={testimonial.avatarAlt}
            />

            <div className="h-2 w-[40px] bg-chili-red absolute -bottom-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
