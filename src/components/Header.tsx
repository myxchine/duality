"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const colour =
    pathname === "/" || pathname === "/about-tour" || pathname === "/strategy"
      ? "white"
      : "white";

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="flex flex-row items-center justify-between top-0 z-10 left-0 w-full absolute p-3 px-5 w-full border-b border-white/20">
      {!isOpen && (
        <section className="flex flex-row items-center justify-between w-full md:max-w-6xl mx-auto">
          <Link href={"/"}>
            <div className="text-center text-white font-semibold text-3xl ">
              <Logo className="w-auto h-8 text-white" />
            </div>
          </Link>
          <div className="block md:hidden">
            <OpenCloseButton
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              colour={colour}
            />
          </div>

          <div className="hidden md:block">
            <div
              className={`flex flex-row gap-8 items-center justify-center text-${colour}`}
            >
              <Link href={"/"}>
                <div
                  className={`font-tds ${
                    pathname === "/" ? "text-tdsRed" : ""
                  }`}
                >
                  Home
                </div>
              </Link>
              <Link href={"/portfolio"}>
                <div
                  className={`font-tds  ${
                    pathname === "/tours" ? "text-tdsRed" : ""
                  }`}
                >
                  Portfolio
                </div>
              </Link>

              <Link href={"/quote"}>
                <div
                  className={`text-black w-fit p-2 px-4 rounded border border-black hover:bg-black hover:text-white hover:border-white ${
                    pathname === "/reserve"
                      ? "bg-white text-black border-white"
                      : "bg-white text-black border-white"
                  }`}
                >
                  Free Quote
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {isOpen && (
        <section className="h-screen bg-black w-screen fixed top-0 z-10 left-0 p-3 px-5 w-full flex flex-col text-white ">
          <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto ">
            <Link href={"/"}>
              <div className="text-center text-white font-semibold text-3xl ">
              <Logo className="w-auto h-8 text-white" />

              </div>
            </Link>
            <div>
              <OpenCloseButton
                isOpen={isOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                colour={colour}
              />
            </div>
          </div>
          <div
            className="flex flex-col gap-4 py-12 items-center justify-center"
            onClick={handleClose}
          >
            <Link href={"/"}>
              <div
                className={`font-tds  ${pathname === "/" ? "text-tdsRed" : ""}`}
              >
                Home
              </div>
            </Link>
            <Link href={"/portfolio"}>
              <div
                className={`font-tds  ${
                  pathname === "/tours" ? "text-tdsRed" : ""
                }`}
              >
                Portfolio
              </div>
            </Link>

            <Link href={"/quote"}>
              <div
                className={`font-tds  text-black w-fit p-2 px-4 rounded ${
                  pathname === "/reserve" ? "bg-white" : "bg-white"
                }`}
              >
                Free Quote
              </div>
            </Link>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;

function OpenCloseButton({
  isOpen,
  handleOpen,
  handleClose,
  colour,
}: {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  colour: string;
}) {
  return (
    <div className=" flex items-left justify-left md:hidden">
      {!isOpen && (
        <button
          aria-label="Mobile Menu Open"
          onClick={handleOpen}
          className="flex items-center justify-center p-2"
        >
          <MenuIcon
            className="   "
            stroke={colour}
            style={{ transform: "scale(1.5)" }}
          />
        </button>
      )}

      {isOpen && (
        <button
          aria-label="Mobile Menu Close"
          className="flex items-center justify-center p-2"
          onClick={handleClose}
        >
          <CloseIcon
            className=""
            stroke="black"
            style={{ transform: "scale(1.5)" }}
          />
        </button>
      )}
    </div>
  );
}
