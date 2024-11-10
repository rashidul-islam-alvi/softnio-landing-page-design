"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Link from "next/link";
import { raleway } from "@/fonts";
import { HamburgerMenu } from "@/icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Logo from "./logo";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "Home", link: "/home" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Portfolio", link: "/portfolio" },
  { id: 4, label: "Clients", link: "/clients" },
  { id: 5, label: "Blog", link: "/blog" },
  { id: 6, label: "Contact", link: "/contact" },
];

const menus = menuItems.map((item) => (
  <li key={item.id} className={cn("text-[15px] text-white", raleway.className)}>
    <Link href={item.link}>{item.label}</Link>
  </li>
));

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <section
      className={`fixed w-full top-0 z-[2000000] ${
        isScrolled ? "bg-chili-red" : "bg-transparent"
      }`}
    >
      <MaxWidthWrapper>
        <div className="sm:py-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-[60px]">
            {/* navbar logo here */}

            <div>
              <Logo />
            </div>

            {/* dextop nav Menus */}

            <div className="hidden sm:block">
              <ul className="flex  gap-10 items-center">{menus}</ul>
            </div>
          </div>

          {/* dextop navbar button */}

          <div className="hidden sm:block">
            <Button
              variant="mustardYellow"
              className="h-[44px] w-[157px] text-[16px]"
            >
              Book a table
            </Button>
          </div>

          {/* mobile hamburger menu */}

          <div className="block sm:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
