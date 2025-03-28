"use client";

import { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import Nav from "./nav";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    const main = document.getElementById("site-main");
    const footer = document.getElementById("site-footer");
    if (!main || !footer) {
      return;
    }
    main.style.display = isOpen ? "none" : "block";
    footer.style.display = isOpen ? "none" : "block";
  }, [isOpen]);
  return (
    <div className={`w-full block md:hidden`}>
      <div className={`flex flex-row items-center justify-between w-full`}>
        <Buttons open={isOpen} setIsOpen={setIsOpen} />

        <Logo />

        <CTA />
      </div>

      {isOpen && <Nav className="flex flex-col items-center gap-4 p-8" />}
    </div>
  );
}

function CTA() {
  return (
    <div className="w-1/5 flex justify-end">
      <Link
        href="/contact"
        className="text-xs px-3 py-1 w-fit rounded-full bg-transparent border hover:bg-foreground hover:text-background"
      >
        Start
      </Link>
    </div>
  );
}

function Buttons({ open, setIsOpen }: { open: boolean; setIsOpen: any }) {
  if (!open) {
    return (
      <button
        aria-label="Open Mobile Menu"
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-start w-1/5"
      >
        <MenuIcon className="size-5" stroke="currentColor" />
      </button>
    );
  }
  return (
    <button
      aria-label="CLose Mobile Menu"
      className="flex items-center justify-start w-1/5"
      onClick={() => setIsOpen(false)}
    >
      <CloseIcon stroke="currentColor" className="size-5" />
    </button>
  );
}
