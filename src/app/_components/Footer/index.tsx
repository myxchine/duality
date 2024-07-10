import Link from "next/link";
import { Logo2 } from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 border-t border-foreground/10 pt-14 pb-6 md:py-20 md:pb-6 mt-8 md:mt-12 text-foreground">
      <div className="flex flex-col items-start justify-between gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-col gap-4  md:gap-6">
          <Logo2 />
          <p className="text-xs  text-foreground/60 text-left md:text-md max-w-5xl w-full">
            Discover the power of custom wev develpment to unlock your full
            potential.
          </p>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-3 w-full gap-8 md:gap-12 md:flex-row ">
          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Main</div>

            <Link href="/" className="hover:underline text-foreground/60">
              Home
            </Link>
            <Link href="/about" className="hover:underline text-foreground/60">
              About Us
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Web Stuff</div>
            <Link
              href="/calculate"
              className="hover:underline text-foreground/60"
            >
              Calculate Price
            </Link>
            <Link
              href="/contact"
              className="hover:underline text-foreground/60"
            >
              Contact Us
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Explore</div>
            <Link
              href="/services"
              className="hover:underline text-foreground/60"
            >
              Our Services
            </Link>
            <Link
              href="/portfolio"
              className="hover:underline text-foreground/60"
            >
              Our Portfolio
            </Link>
          </nav>
        </section>

        <div className="flex flex-col items-center gap-4 text-xs md:text-sm mt-4 w-full ">
          <p>&copy; 2024 We Build Websites Portugal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
