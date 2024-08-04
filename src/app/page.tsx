import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <MyClients />
      <AboutMicahelDosSantos />
      <WebDevelopmentAndDesignServices />
    </>
  );
}

function AboutMicahelDosSantos() {
  return (
    <div className="w-full md:py-12">
      <section className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto px-0">
        <div className="flex flex-col gap-4 px-6">
          <h2 className="text-3xl md:text-5xl text-balance">
            About Michael Dos Santos
          </h2>
          <p className="text-sm text-foreground md:text-lg">
            I'm Michael dos Santos, a seasoned web developer and designer based
            in Portugal. With years of experience crafting websites for various
            industries, I focus on delivering responsive, dynamic, and visually
            appealing web solutions tailored to your needs.
          </p>
        </div>
      </section>
    </div>
  );
}

function WebDevelopmentAndDesignServices() {
  return (
    <div className="w-full md:py-12">
      <section className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto px-0">
        <div className="flex flex-col gap-4 px-6">
          <h2 className="text-3xl md:text-5xl">
            Web Development and Design Services
          </h2>
          <p className="text-sm text-foreground md:text-lg">
            I specialize in web development and design, with a focus on
            responsive, user-friendly, and visually appealing websites.
          </p>
        </div>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="flex full-screen flex-col w-full relative md:flex-row   items-center justify-center max-h-[700px] md:max-h-[1100px]">
      <Image
        src="/images/hero5.jpg"
        alt="Michael Dos Santos - Designer & Developer based in Portugal"
        className="md:aspect-square object-cover objext-position-bottomr h-full object-cover w-full brighter-image"
        width={600}
        height={1000}
        quality={100}
        objectPosition="center"
        priority={true}
      />
      <Main />
      <div className="fade-top-down " />
      <div className="fade-down-top " />
    </section>
  );
}

function Main() {
  return (
    <div className="flex flex-col  w-full items-center justify-center text-left absolute bottom-0 md:bottom-24 left-0 gap-4 p-6 z-[100]">
      <h1 className="text-5xl text-center w-full max-w-3xl font-bold leading-tight tracking-tighter  md:text-8xl  text-balance   ">
        Web Designer & Developer
      </h1>
      <div className="flex flex-col gap-4     w-full max-w-3xl ">
        <p className="text-center w-full text-sm  md:text-xl leading-loose max-w-2xl mx-auto text-balance   ">
          I curate custom, beautiful and fast websites to your wildest
          imagination.
        </p>

        <div className="flex flex-row items-center justify-center gap-4  w-full max-w-md mx-auto mt-2">
          <Link href="/contact" className="w-full">
            <button className="px-4 py-2 w-full border rounded bg-foreground text-background hover:bg-transparent hover:text-foreground border-foreground md:text-lg">
              Get a Quote
            </button>
          </Link>
          <Link href="/portfolio" className="w-full">
            <button className="px-4 py-2 w-full border border-foreground rounded  hover:bg-foreground hover:text-background md:text-lg">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
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
    <div className="flex flex-col gap-4  w-full  max-w-6xl xl:px-0 relative scrollbar-hidden">
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
      href={portfolio.url}
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
