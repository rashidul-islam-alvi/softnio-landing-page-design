import React from "react";
import { Button } from "./ui/button";
import Logo from "./logo";

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface NavbarMobileProps {
  menuItems: MenuItem[];
}
const NavbarMobile = ({ menuItems }: NavbarMobileProps) => {
  return (
    <div className="p-6 h-full border-r flex items-center justify-between flex-col gap-10">
      <div>
        <Logo />
      </div>

      <ul className="flex flex-col items-center gap-10 ">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="text-white text-3xl hover:text-gray-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <Button variant="mustardYellow" className="h-11 w-[157px] text-base">
        Book a table
      </Button>
    </div>
  );
};

export default NavbarMobile;
