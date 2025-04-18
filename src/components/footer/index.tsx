import Link from "next/link";
import { Row, Block } from "@/components/ui";
import { footerMenu } from "@/siteConfig";

export const dynamic = "force-static";

export default async function Footer() {
  return (
    <footer id="site-footer" className="bg-secondary">
      <Row>
        <section className="flex flex-wrap justify-start  md:my-6 w-full gap-8 md:gap-24 ">
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6 max-w-[320px]">
            <p className="   text-base text-foreground !font-accent !font-medium">
              Menu
            </p>
            {footerMenu.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:text-foreground text-foreground/60 font-light text-lg md:text-xl`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className=" flex-col items-start gap-4 w-fit md:gap-6 max-w-[320px] flex">
            <p className="    text-base text-foreground !font-accent !font-medium">
              Information
            </p>
            <p className=" !text-foreground/60 !font-light  ">
              R. de Dona Estefânia 195, Lisbon, Portugal
            </p>
            <p className=" !text-foreground/60 !font-light  ">
              Founder: Michael Dos Santos
            </p>
            <a
              href="mailto:michael@michaelsantos.pt"
              className="hover:text-black text-foreground/60 !font-light text-lg md:text-xl "
            >
              Email: michael@michaelsantos.pt
            </a>
            <a
              href="tel:+351 964 691 830"
              className="hover:text-black text-foreground/60 !font-light text-lg md:text-xl "
            >
              Phone: +351 964 691 830
            </a>
          </div>
        </section>

        <p className="flex flex-col items-center text-center gap-4 !text-sm w-full mt-8 md:mt-8 text-foreground/60 ">
          &copy; 2025 Michael Santos Web Solutions.
        </p>
      </Row>
    </footer>
  );
}

function Extra() {
  return (
    <Block padding small>
      <h2 className="max-w-xl">
        Premium Website Design & Development in Lisbon
      </h2>

      <p className="max-w-xl">
        Empowering businesses for 5+ years to scale through result-focused web
        design & development optimised for your customers to find you whilst
        providing a compelling user experience tailored to your business' offer
        and brand.
      </p>

      <Link href="/contact" className="primary-button w-fit mt-2">
        Contact us{" "}
        <span className="font-sans font-bold text-base tracking-normal">
          {"->"}
        </span>
      </Link>
    </Block>
  );
}
