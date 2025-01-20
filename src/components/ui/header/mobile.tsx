"use client";

import { useState, useEffect } from "react";
import Nav from "./nav";
import { MenuIcon, CloseIcon, SearchIcon } from "@/components/ui/icons";
import Logo from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const footer = document.getElementById("porto-footerf");
    const main = document.getElementById("porto-mainf");
    if (!footer || !main) {
      return;
    }
    footer.style.display = isOpen ? "none" : "flex";
    main.style.display = isOpen ? "none" : "block";
  }, [isOpen]);

  return (
    <div className={`w-full block md:hidden  `}>
      <div
        className={`flex flex-row items-center justify-between w-full   p-2 px-4`}
      >
        <Buttons open={isOpen} setIsOpen={setIsOpen} />

        <Logo />

        <Link href="/properties">
          <SearchIcon className="size-5  " stroke="white" />
        </Link>
      </div>

      {isOpen && (
        <>
          <Nav className="flex flex-col gap-4 pb-6 pt-4 items-center justify-center px-4" />
        </>
      )}
    </div>
  );
}

function Buttons({ open, setIsOpen }: { open: boolean; setIsOpen: any }) {
  return (
    <>
      {!open ? (
        <button
          aria-label="Mobile Menu Open"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-start "
        >
          <MenuIcon className="size-5  " stroke="white" />
        </button>
      ) : (
        <button
          aria-label="Mobile Menu Close"
          className="flex items-center justify-start "
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon stroke="white" className="  size-5 " />
        </button>
      )}
    </>
  );
}
