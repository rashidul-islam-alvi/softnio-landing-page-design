import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { bebasNeue, roboto } from "@/fonts";
import { Button } from "./ui/button";
import TodayOffer from "./today-offer";

const Hero = () => {
  return (
    <section className="bg-hero-red-gradient">
      <div className="bg-hero-pattern bg-no-repeat bg-cover">
        <MaxWidthWrapper>
          <div className="flex  flex-col gap-y-12 sm:gap-y-0 sm:flex-row pt-[109px] pb-8 sm:pt-[238px] sm:pb-[160px]">
            {/* hero left */}

            <div className="flex sm:w-[622px] items-center sm:relative">
              <div className="sm:absolute sm:left-0 sm:z-10">
                <h2
                  className={cn(
                    "text-[48px] leading-[56px] sm:text-[120px] mb-4 sm:leading-[130px] text-white sm:min-w-[832px] sm:bg-text-red-opacity-gradient",
                    bebasNeue.className
                  )}
                >
                  Taste the authentic Saudi cuisine
                </h2>

                <p
                  className={cn(
                    "text-white sm:text-2xl text-[20px] leading-[28px] mb-[38px] max-w-[559px]",
                    roboto.className
                  )}
                >
                  Among the best Saudi chefs in the world, serving you something
                  beyond flavor.
                </p>

                <div>
                  <Button
                    variant="mustardYellow"
                    className="h-[56px] w-[180px] rounded-none"
                  >
                    explore menu
                  </Button>
                </div>
              </div>
            </div>
            {/* hero right */}
            <div className="relative sm:w-[700px]">
              <div className="absolute -right-5 sm:-right-7 sm:-top-8 -top-5">
                <Image
                  src="/flower-decoration.svg"
                  alt="flower-hero-decoration"
                  width={45}
                  height={45}
                  loading="lazy"
                />
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
