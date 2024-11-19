"use server";

import { sites } from "@/server/db/sites";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full full-screen fixed top-0 left-0">
      <div className="flex flex-col max-w-4xl mx-auto gap-4 p-8 pb-24 md:pb-32 full-screen justify-center ">
        <div className="flex flex-col  ">
          <p className="font-custom text-2xl md:text-3xl uppercase">
            Michael Dos Santos
          </p>
          <h1>Designer & Developer</h1>
        </div>

        <p className="text-balance max-w-md font-mono">
          I specialise in <strong> creative solutions</strong> combined with the{" "}
          <strong> technical skills </strong> to design, build and implement
          them.
        </p>

        <Link
          href={`/contact`}
          className="hover:underline font-mono text-balance mt-2 md:mt-4 text-lg md:text-xl pl-1 w-fit"
        >
          <span className="font-mono">Contact Me</span>{" "}
          <span className="font-sans"> {"->"} </span>
        </Link>
      </div>
    </div>
  );
}

function MyClients() {
  return (
    <section className="flex gap-2 flex-col my-12 md:my-24">
      <h2>My Web Clients</h2>
      <p>
        Take a look at a select few of active client websites to learn about my
        work.
      </p>
      <PortfolioList data={sites} />
    </section>
  );
}

function PortfolioList({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12  w-full  max-w-6xl relative scrollbar-hidden mt-6">
      {data.map((site) => (
        <PortfolioCard key={site.title} portfolio={site} />
      ))}
    </div>
  );
}

function PortfolioCard({ portfolio }: { portfolio: any }) {
  return (
    <Link
      href={`/clients/${portfolio.slug}`}
      className="flex flex-col  w-full gap-4 items-center flex-shrink-0  relative  mb-6"
    >
      <Image
        src={`/images/sites/${portfolio.desktopImage}`}
        alt={portfolio.title}
        width={800}
        height={500}
        priority={true}
        className="w-full h-auto rounded-md border aspect-[4/3] object-cover"
      />

      <div className="flex flex-col gap-4 w-full ">
        <h3>{portfolio.title}</h3>

        <p className=" line-clamp-3 text-sm font-normal">
          {portfolio.description}
        </p>
      </div>
    </Link>
  );
}
