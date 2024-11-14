import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import AboutFeatures from "./about-features";
import AboutTabs from "./about-tabs";
import ImageComponent from "./ui/image";

const About = () => {
  return (
    <section className="relative overflow-x-hidden">
      {/* about background decorator */}
      <div className="hidden lg:block absolute -right-[230px] bottom-[47px]">
        <ImageComponent
          src="/about-decor.png"
          alt="about_decoration_capsicum"
          className="w-[363.84px] h-[340.14px]"
        />
      </div>
      <MaxWidthWrapper>
        <div className="flex flex-col py-8 sm:py-14 lg:py-[120px]">
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
