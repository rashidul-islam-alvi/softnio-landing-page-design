import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import AboutFeatures from "./about-features";
import AboutTabs from "./about-tabs";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative">
      {/* about background decorator */}
      <div className="hidden sm:block absolute -right-[230px] bottom-[47px]">
        <div className="relative w-[363.84px] h-[340.14px]">
          <Image
            src="/about-decor.png"
            alt="about_decoration_capsicum"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-col py-[32px] sm:py-[120px]">
          {/* about tabs section */}
          <AboutTabs />

          {/* about features section */}
          <AboutFeatures />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
