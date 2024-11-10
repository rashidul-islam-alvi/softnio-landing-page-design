import React from "react";

import CarouselButtons from "./carousel-buttons";
import Header from "./header";

interface CarouselNavigationProps {
  mainHeading: string;
  squareHeading: string;
  onNext: () => void;
  onPrev: () => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
  mainHeading,
  squareHeading,
  onNext,
  onPrev,
}) => {
  return (
    <div className="flex justify-between items-center">
      {/** carousel header */}
      <Header
        mainHeadingTitle={mainHeading}
        squareHeadingTitle={squareHeading}
      />

      {/** Desktop carousel buttons */}
      <CarouselButtons
        className="hidden sm:flex"
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
};

export default CarouselNavigation;
