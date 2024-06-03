"use client";

import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";

import MobileMenu from "@/components/menu/Mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-col  sticky top-0 z-10 p-2 border-b border-gray-300 bg-white bg-opacity-50 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="mobile flex items-left justify-left md:hidden">
          {!isOpen && (
            <button onClick={handleOpen}>
              <HiOutlineMenuAlt4 className="text-xl w-[50px] flex items-left justify-left" />
            </button>
          )}

          {isOpen && (
            <button onClick={handleOpen}>
              <TfiClose className="text-xl w-[50px]" />
            </button>
          )}
        </div>
        <div className="text-xl font-bold uppercase flex items-center">MYX</div>
        <div className=" md:hidden w-[50px]"></div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
