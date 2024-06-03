"use client";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

import MobileMenu from "@/components/menu/Mobile";
import Nav from "@/components/menu/Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col  sticky top-0 z-10 p-2 md:p-4 border-b border-gray-300 bg-white ">
      <div className="flex items-center justify-between relative">
        <div className="mobile flex items-left justify-left md:hidden">
          {!isOpen && (
            <button onClick={handleOpen}>
              <HiOutlineMenuAlt4
                aria-label="Mobile Menu Open"
                className=" text-xl h-[28px] flex items-left justify-left"
              />
            </button>
          )}

          {isOpen && (
            <button onClick={handleOpen}>
              <TfiClose
                aria-label="Mobile Menu Close"
                className="text-xl h-[28px]"
              />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between hidden md:flex">
          <Nav />
        </div>

        <div className="text-2xl md:text-2xl font-bold uppercase flex items-center absolute top-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          MYX
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
