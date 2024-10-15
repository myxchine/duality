import { sites } from "@/server/db/sites";
import { Metadata } from "next";
import { Section, Row } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: "My Clients",
  description:
    "Learn about my work as a web developer and designer. Discover some of my active client websites.",
};

export default function Portfolio() {
  return (
    <Section>
      <Row>
        <h1>My Clients</h1>
        <p>
          Take a look at some of my active client websites to learn about my
          work as a web developer and designer.
        </p>
        <PortfolioList data={sites} />
      </Row>
    </Section>
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
        <h2>{portfolio.title}</h2>

        <p className=" line-clamp-2 font-normal">{portfolio.description}</p>
      </div>
    </Link>
  );
}
