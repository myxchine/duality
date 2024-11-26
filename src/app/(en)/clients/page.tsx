import Image from "next/image";
import { sites } from "@/server/db/sites";
import Link from "next/link";
import Blob from "@/app/(en)/blob";
export default function Clients() {
  return (
    <div className="w-full  bg-white flex flex-col items-center justify-center overflow-hidden">
      <MyClients />
    </div>
  );
}

function MyClients() {
  return (
    <section className="flex gap-2 flex-col my-12 md:my-24">
      <div className="flex flex-col  ">
        <p className="font-custom text-2xl md:text-3xl uppercase">
          Michael Dos Santos
        </p>
        <h1>My Clients</h1>
      </div>
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
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12  w-full  max-w-6xl relative scrollbar-hidden mt-6">
      {data.map((site) => (
        <PortfolioCard key={site.title} portfolio={site} />
      ))}
    </div>
  );
}

function PortfolioCard({ portfolio }: { portfolio: any }) {
  return (
    <Link
      href={portfolio.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col  w-full gap-4 items-center flex-shrink-0  relative  mb-6 "
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
