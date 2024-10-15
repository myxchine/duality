import Link from "next/link";
import Form from "../newsletter";
import Social from "@/components/social";
import navItems from "@/data/menu_nav.json";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 gap-16 md:gap-0 pt-14 pb-6 md:py-28 md:pb-6    border-t border-foreground">
      <div className="w-full text-left  px-4 flex flex-col gap-4 max-w-6xl">
        <h2>Michael Dos Santos Web Designer & Developer Portugal</h2>
        <p>
          Discover the power of custom web develpment to unlock your full
          potential.
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-12 w-full max-w-6xl px-4 md:gap-16">
        <section className="flex flex-wrap justify-between  md:my-16 w-full gap-16 md:gap-24 ">
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
            <p>Main</p>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline font-normal text-black/60`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-4 w-fit md:gap-6 max-w-[320px]">
            <p>Information</p>
            <p>Av. Dom João II, Lisbon, Portugal</p>
            <p> Phone: +351 964 691 830</p>
          </div>
          <Form />
        </section>

        <p className="flex flex-col items-center text-center gap-4 text-xs md:text-sm  w-full mt-4 md:mt-8">
          &copy; 2024 Michael Dos Santos Web Developer & Designer Portugal.
        </p>
      </div>
    </footer>
  );
}
