import Link from "next/link";
import { Logo2 } from "@/components/Logo";
import Form from "../Form";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 border-t border-foreground/10 pt-14 pb-6 md:py-20 md:pb-6 mt-8 md:mt-12 text-foreground">
      <div className="flex flex-col items-start justify-start gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-col gap-4  md:gap-6">
          <Logo2 />
          <p className="text-sm  text-foreground/60 text-left md:text-md max-w-sm w-full">
            Discover the power of custom web develpment to unlock your full
            potential.
          </p>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-4 w-full gap-8 md:gap-12 md:flex-row ">
          <nav className="flex flex-col items-start gap-4 text-sm w-full md:gap-8">
            <div className="text-base font-semibold">Main</div>

            <Link href="/" className="hover:underline text-foreground/60">
              Home
            </Link>
            <Link href="/about" className="hover:underline text-foreground/60">
              About Me
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full md:gap-8">
            <div className="text-base font-semibold">Web Stuff</div>

            <Link
              href="/contact"
              className="hover:underline text-foreground/60"
            >
              Contact Us
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full md:gap-8">
            <div className="text-base font-semibold">Explore</div>
            <Link
              href="/services"
              className="hover:underline text-foreground/60"
            >
              My Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:underline text-foreground/60"
            >
              My Portfolio
            </Link>
          </nav>

          <div className="hidden md:block">
            <Form />
          </div>
        </section>
        <div className="block md:hidden mt-8">
          <Form />
        </div>
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm  w-full mt-4 md:mt-8">
          <p>
            &copy; 2024 Michael Dos Santos Web Agency Portugal. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
