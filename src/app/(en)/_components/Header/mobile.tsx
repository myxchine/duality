"use client";

import { useState, useEffect, use } from "react";
import Nav from "./nav";
import Link from "next/link";
import { MenuIcon, CloseIcon, SearchIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import Social from "@/components/social";
import AnnouncementBanner from "./announcement";
import LanguageSwitcher from "../langswitch";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    if (!isOpen) {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="w-full md:hidden block">
      {!isOpen && <Closed setIsOpen={setIsOpen} />}
      {isOpen && <Open setIsOpen={setIsOpen} />}
    </div>
  );
}

function Closed({ setIsOpen }: { setIsOpen: any }) {
  return (
    <div className="flex flex-row items-center justify-between w-full  p-2 px-4  border-foreground">
      <Logo />
      <button
        aria-label="Mobile Menu Open"
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-fit"
      >
        <MenuIcon className="h-6 w-6 " stroke="black" />
      </button>
    </div>
  );
}

function Open({ setIsOpen }: { setIsOpen: any }) {
  return (
    <div className="h-screen  w-screen fixed top-0 z-10 left-0 w-full flex flex-col  bg-foreground text-background">
      <div className="flex flex-row items-center justify-between w-full p-2 px-4 bg-foreground text-background">
        <Logo />
        <button
          aria-label="Mobile Menu Close"
          className="flex items-center justify-center "
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon stroke="black" className="  h-6 w-6" />
        </button>
      </div>

      <div>
        <div>
          <Nav className="flex flex-col gap-6 py-4 items-center justify-center px-4 mt-8" />
        </div>
      </div>
    </div>
  );
}
