import Link from "next/link";
import { Row, Block } from "@/components/ui";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const dynamic = "force-static";

export default async function Footer() {
  return (
    <footer id="site-footer" className="bg-secondary border-t border-black/5">
      <Row>
        <Block padding small>
          <h2 className="max-w-xl">
            Website Design & Development for Businesses in Lisbon
          </h2>

          <p className="max-w-xl">
            Empowering businesses to scale from organic growth and
            results-focused web solutions optimised for your customers to find
            you.
          </p>

          <Link href="/contact" className="button-1 mt-2">
            Contact us {"->"}
          </Link>
        </Block>
        <section className="flex flex-wrap justify-start  md:my-6 w-full gap-8 md:gap-24 ">
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6 max-w-[320px]">
            <p className="   text-base text-foreground !font-accent !font-medium">
              Menu
            </p>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-foreground/60 font-light `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className=" flex-col items-start gap-4 w-fit md:gap-6 max-w-[320px] flex">
            <p className="    text-base text-foreground !font-accent !font-medium">
              Information
            </p>
            <p className="hover:underline text-foreground/60 font-light  ">
              R. de Dona Estefânia 195, Lisbon, Portugal
            </p>
            <p className="hover:underline text-foreground/60 font-light  ">
              Founder: Michael Dos Santos
            </p>
            <p className="hover:underline text-foreground/60 font-light  ">
              Email: michael@vesqa.com
            </p>
            <p className="hover:underline text-foreground/60 font-light  ">
              Phone: +351 964 691 830
            </p>
          </div>
        </section>

        <p className="flex flex-col items-center text-center gap-4 text-sm w-full mt-8 md:mt-8 text-foreground ">
          &copy; 2025 Michael Santos Web Solutions.
        </p>
      </Row>
    </footer>
  );
}
