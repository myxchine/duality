"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <section className="flex flex-row items-center justify-between w-full md:max-w-6xl mx-auto">
          <Link href={"/"} className="w-fit flex flex-row items-start ">
            <Logo />
          </Link>
          <button
            aria-label="Mobile Menu Open"
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center "
          >
            <MenuIcon className="  h-8 w-8 " stroke="white" />
          </button>
        </section>
      )}

      {isOpen && (
        <section className="h-screen bg-background w-screen fixed top-0 z-10 left-0 p-4 px-5 w-full flex flex-col text-foreground ">
          <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto ">
            <Link href={"/"}>
              <div className="text-center text-white font-semibold text-3xl ">
                <Logo />
              </div>
            </Link>
            <div>
              <button
                aria-label="Mobile Menu Close"
                className="flex items-center justify-center "
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon stroke="white" className="  h-8 w-8" />
              </button>
            </div>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Nav className="flex flex-col gap-8 py-12 items-center justify-center" />
          </div>
        </section>
      )}
    </>
  );
}
