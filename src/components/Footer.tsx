import Link from "next/link";
import Logo from "./Header/Logo2";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 border-t border-black/10 pt-14 pb-6 md:py-20 md:pb-6 mt-8 md:mt-12">
      <div className="flex flex-col items-start justify-between gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-col gap-4  md:gap-6">
          <Logo />
          <p className="text-xs  text-black/60 text-left md:text-md max-w-5xl w-full">
            Discover the thrill of off-road and street motorcycle adventures in
            the beautiful Algarve region.
          </p>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-3 w-full gap-8 md:gap-12 md:flex-row ">
          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Main</div>

            <Link href="/" className="hover:underline text-black/60">
              Home
            </Link>
            <Link href="/tours" className="hover:underline text-black/60">
              Portfolio
            </Link>
            <Link href="/rentals" className="hover:underline text-black/60">
              Calculate
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Reserve</div>
            <Link href="/reserve" className="hover:underline text-black/60">
              Reserve Tour
            </Link>
            <Link
              href="/reserve/rent"
              className="hover:underline text-black/60"
            >
              Reserve Rental
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Explore</div>
            <Link href="/about-tour" className="hover:underline text-black/60">
              About the Tour
            </Link>
            <Link href="/bikes" className="hover:underline text-black/60">
              Our Motorbikes
            </Link>
          </nav>
        </section>

        <div className="flex flex-col items-center gap-4 text-xs md:text-sm mt-4 w-full ">
          <p>&copy; 2024 Duality Web Agency Portugal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
