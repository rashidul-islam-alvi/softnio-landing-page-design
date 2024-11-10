import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import TestimonialCarousel from "./testimonial-carousel";
import Image from "next/image";
import ImageComponent from "./ui/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  feedback: string;
  avatarURL: string;
  avatarAlt: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    location: "Riyadh, Saudi Arabia",
    feedback:
      "The Lamb Kabsa was a delight! Perfectly tender lamb, and the spices were just right—not too overpowering. We loved it so much that we ordered it again the very next day. Highly recommend!",
    avatarURL: "/avatar.png",
    avatarAlt: "Sarah Ahmed's profile picture",
  },
  {
    id: 2,
    name: "Abdullah Al-Sharif",
    location: "Dammam, Saudi Arabia",
    feedback:
      "Best shawarma in town! The bread was warm and soft, and the fillings were generously flavorful. It's rare to find shawarma that feels both traditional and fresh like this. Will come back for more!",
    avatarURL: "/avatar.png",
    avatarAlt: "Abdullah Al-Sharif's profile picture",
  },
  {
    id: 3,
    name: "Lina Mahmoud",
    location: "Dubai, UAE",
    feedback:
      "Fantastic service and amazing taste! The Beef Kofta was so juicy and flavorful, unlike anything I’ve tried before. This place has become my go-to for authentic flavors. Worth every penny.",
    avatarURL: "/avatar.png",
    avatarAlt: "Lina Mahmoud's profile picture",
  },
  {
    id: 4,
    name: "Omar Al-Rashid",
    location: "Kuwait City, Kuwait",
    feedback:
      "I had the Mixed Grill Platter, and every single item was a hit! Perfectly cooked meats with a smoky flavor. It felt like a real feast. I’d give it a 10/10 without hesitation.",
    avatarURL: "/avatar.png",
    avatarAlt: "Omar Al-Rashid's profile picture",
  },
];

const Testimonial = () => {
  return (
    <section className="relative">
      {/* testimonial background decorators */}
      <div className="hidden sm:block absolute -right-[190px] bottom-[101.19px]">
        <ImageComponent
          src="/t-bg-decor-right.png"
          alt="testimonial_decorator_grass"
          className="w-[566.44px] h-[503.19px]"
        />
      </div>

      <div className="hidden sm:block absolute -left-[190px] top-[171.19px]">
        <ImageComponent
          src="/t-bg-decor-left.png"
          alt="testimonial_decorator_grass"
          className="w-[307px] h-[303px]"
        />
      </div>

      <MaxWidthWrapper>
        <div className="pt-[32px] pb-[30px] sm:py-[120px]">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonial;
