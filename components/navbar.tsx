"use client";

import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { raleway } from "@/fonts";
import { HamburgerMenu } from "@/icons";
import { Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

import Logo from "./logo";
import NavbarMobile from "./navbar-mobile";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { Button } from "./ui/button";

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "/" },
  { id: 3, label: "Portfolio", link: "/" },
  { id: 4, label: "Clients", link: "/" },
  { id: 5, label: "Blog", link: "/" },
  { id: 6, label: "Contact", link: "/" },
];

const menus = menuItems.map((item) => (
  <li
    key={item.id}
    className={cn("text-[15px] font-medium text-white", raleway.className)}
  >
    <Link href={item.link}>{item.label}</Link>
  </li>
));

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <section
      className={`fixed w-full  top-0 z-[2000000] ${
        isScrolled ? "bg-chili-red" : "transparent"
      }`}
    >
      <MaxWidthWrapper>
        <div className="sm:py-8  py-5 relative flex justify-between items-center">
          <div className="flex  items-center gap-[60px]">
            {/* navbar logo here */}

            <div>
              <Logo />
            </div>

            {/* dextop nav Menus */}

            <div className="hidden lg:block">
              <ul className="flex  gap-10 items-center">{menus}</ul>
            </div>
          </div>

          {/* dextop navbar button */}

          <div className="hidden  lg:block">
            <Button
              variant="mustardYellow"
              className="h-11 w-[157px] text-base font-extrabold"
            >
              Book a table
            </Button>
          </div>

          {/* mobile hamburger menu */}

          <div className="flex lg:hidden justify-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <Cross1Icon className="size-6 text-white" />
              ) : (
                <HamburgerMenu />
              )}
            </button>
          </div>
        </div>
        {/* mobile nav */}
        <div
          className={`absolute ${
            isOpen ? "-left-9  xs:-left-12 md:-left-40" : "-left-[200%]"
          } top-0 bg-chili-red h-screen z-[30000] w-4/5 block lg:hidden  transition-all duration-300`}
        >
          <NavbarMobile menuItems={menuItems} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
