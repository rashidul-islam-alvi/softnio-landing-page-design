import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import HeadingTitle from "./ui/heading-title";
import FooterCards from "./footer-cards";
import SocialLinks from "./footer-social-links";
import { cn } from "@/lib/utils";
import { montserrat } from "@/fonts";

const Footer = () => {
  return (
    <section className="bg-footer-background-image relative  bg-no-repeat bg-cover">
      <div className="bg-black/80 absolute w-full h-full z-10" />
      <div className="py-[30px] sm:py-[120px] relative z-20">
        <MaxWidthWrapper>
          <div>
            {/** footer heading */}
            <div className="flex justify-center mb-12">
              <HeadingTitle
                className="text-white text-center "
                label="We ready to have you the best dining experiences"
              />
            </div>

            {/** footer cards*/}
            <div>
              <FooterCards />
            </div>

            {/** footer scoial links*/}
            <div className="mt-[60px] sm:mt-[120px] flex gap-[25px] items-center flex-col">
              <SocialLinks />

              <p
                className={cn(
                  "text-base sm:text-[21px] tracking-[3%] text-white",
                  montserrat.className
                )}
              >
                © 2023
                <span className="font-medium text-mustard-yellow px-2">
                  Niomax
                </span>
                All Rights Reserved
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default Footer;
