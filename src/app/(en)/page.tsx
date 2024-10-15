import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import { blog } from "@/server/db/blog";
import { Section, Row } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <Section>
        <Row>
          <MyClients />
        </Row>
        <Row>
          <Blog />
        </Row>
      </Section>
    </>
  );
}

function Blog() {
  return (
    <section className="flex flex-col gap-12 md:gap-24">
      {blog.map((blog) => (
        <div key={blog.slug} className="w-full flex flex-col gap-4">
          <h2>{blog.heading}</h2>
          <p>{blog.paragraph}</p>
          <Link
            href={`/blog/${blog.slug}`}
            className="font-semibold hover:underline"
          >
            Read More {"->"}
          </Link>
        </div>
      ))}
    </section>
  );
}

import { sites } from "@/server/db/sites";

function MyClients() {
  return (
    <>
      <h2>My Clients</h2>
      <p>
        Take a look at some of my active client websites to learn about my work.
      </p>
      <PortfolioList data={sites} />
    </>
  );
}

function PortfolioList({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-24  w-full  max-w-6xl relative scrollbar-hidden mt-6">
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
      className="flex flex-col  w-full gap-8 items-center flex-shrink-0  relative overflow-hidden "
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
        <h3>{portfolio.title}</h3>

        <p className=" line-clamp-2 font-normal">{portfolio.description}</p>
      </div>
    </Link>
  );
}
