import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { bebasNeue, roboto } from "@/fonts";
import { Button } from "./ui/button";
import TodayOffer from "./today-offer";
import Flower from "@/icons/flower";

const Hero = () => {
  return (
    <section className="bg-hero-red-gradient overflow-x-hidden">
      <div className="bg-hero-pattern-mobile sm:bg-hero-pattern bg-no-repeat bg-cover">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-y-12 sm:pb-14 lg:gap-y-0 lg:flex-row pt-[109px] pb-8 lg:pt-[238px] lg:pb-40">
            {/* hero left */}

            <div className="flex  lg:w-[622px] items-center sm:relative">
              <div className="lg:absolute lg:left-0 lg:z-10 sm:w-full  sm:flex sm:flex-col sm:items-center lg:items-start">
                <h2
                  className={cn(
                    "text-5xl lg:pt-5 sm:text-6xl sm:text-center sm:leading-[90px] lg:text-left leading-[56px] lg:text-[120px] mb-4 lg:leading-[130px] text-white lg:min-w-[830px] lg:bg-text-red-opacity-gradient",
                    bebasNeue.className
                  )}
                >
                  Taste the authentic Saudi cuisine
                </h2>

                <p
                  className={cn(
                    "text-white sm:text-2xl sm:text-center lg:text-left text-xl leading-7 mb-[38px] max-w-[559px]",
                    roboto.className
                  )}
                >
                  Among the best Saudi chefs in the world, serving you something
                  beyond flavor.
                </p>

                <div>
                  <Button
                    variant="mustardYellow"
                    className="h-14 w-[180px] rounded-none text-lg font-bold"
                  >
                    explore menu
                  </Button>
                </div>
              </div>
            </div>
            {/* hero right */}
            <div className="relative lg:w-[700px] sm:flex sm:justify-center sm:items-center ">
              <div className="absolute -right-5 sm:-right-7 sm:-top-8 -top-5">
                <div className="size-[45px]">
                  <Flower />
                </div>
              </div>
              <div className="hidden sm:block absolute z-10 -bottom-0 -right-14">
                <TodayOffer />
              </div>
              <Image
                src="/hero-steak-image.png"
                alt="hero-steak-image"
                width={700}
                height={649}
                loading="lazy"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Hero;
