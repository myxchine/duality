import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/Hero";
import { blog } from "./_data/blog";

export default function Home() {
  return (
    <>
      <Hero />
      <MyClients />
      <Blog />
    </>
  );
}

function Blog() {
  return (
    <>
      {blog.map((blog) => (
        <div className="w-full md:py-12">
          <section className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto px-0">
            <div className="flex flex-col gap-4 px-6">
              <h2 className="text-3xl md:text-5xl text-balance">
                {blog.heading}
              </h2>
              <p className="text-sm text-foreground md:text-lg">
                {blog.paragraph}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="font-semibold hover:underline"
              >
                Read More {"->"}
              </Link>
            </div>
          </section>
        </div>
      ))}
    </>
  );
}

import { sites } from "@/server/db/sites";

function MyClients() {
  return (
    <div className="w-full ">
      <section className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto px-0">
        <div className="flex flex-col gap-4 px-6">
          <h2 className="text-3xl md:text-5xl">My Clients</h2>
          <p className="text-sm text-foreground/60 md:text-lg">
            Take a look at some of my active client websites to learn about my
            work.
          </p>
        </div>

        <PortfolioList data={sites} />
      </section>
    </div>
  );
}

function PortfolioList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-4  w-full  max-w-6xl xl:px-4 relative scrollbar-hidden">
      <div className="flex overflow-x-auto px-6 gap-6 scrollbar-hidden">
        {data.map((site) => (
          <PortfolioCard key={site.title} portfolio={site} />
        ))}
      </div>
      <div className="fade-right pointer-events-none scrollbar-hidden" />
    </div>
  );
}

function PortfolioCard({ portfolio }: { portfolio: any }) {
  return (
    <Link
      href={`/clients/${portfolio.slug}`}
      className="flex flex-col  w-3/4 gap-8    md:w-2/5 items-center flex-shrink-0  relative overflow-hidden "
    >
      <Image
        src={`/images/sites/${portfolio.desktopImage}`}
        alt={portfolio.title}
        width={800}
        height={500}
        priority={true}
        className="w-full h-auto rounded-md border border-foreground/20 shadow-md flex-1"
      />

      <div className="flex flex-col gap-4 w-full ">
        <h2 className="text-xl md:text-3xl line-clamp-1">{portfolio.title}</h2>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-sm text-foreground/50 line-clamp-2">
            {portfolio.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
