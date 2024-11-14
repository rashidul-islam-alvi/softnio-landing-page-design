import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import BookingForm from "./booking-form";
import Header from "./ui/header";

const Booking = () => {
  return (
    <div className="bg-booking-form-background-image bg-no-repeat bg-cover">
      <MaxWidthWrapper>
        <div className="py-[30px] lg:pt-[120px] lg:pb-[86px] flex flex-col  gap-10 lg:max-w-[635px]">
          {/** booking header **/}
          <Header
            mainHeadingTitle="Book Your Table"
            squareHeadingTitle="Book Now"
            mainHeadingTitleClassName="text-white"
            subTitle="Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                      molestie vel, ornare non id blandit netus."
          />

          {/** booking form **/}
          <BookingForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Booking;
