import Hero from "./_components/Hero";
import Showcase from "./_components/Showcase";
import Portfolio from "./portfolio/page";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <ImageHero />
      <Portfolio />
    </main>
  );
}

function ImageHero() {
  return (
    <section className="flex full-screen flex-col w-full relative md:flex-row   items-center justify-center max-h-[700px] md:max-h-[1000px]">
      <Image
        src="/images/hero5.jpg"
        alt="Michael Dos Santos - Designer & Developer based in Portugal"
        className="md:aspect-square object-cover objext-position-bottomr h-full object-cover w-full "
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
    <div className="flex flex-col  w-full items-center justify-center text-left absolute bottom-4 md:bottom-24 left-0 gap-4 p-6 z-[100]">
      <h1 className="text-5xl text-center w-full max-w-3xl font-bold leading-tight font-bold  md:text-8xl tracking-tighter text-balance   ">
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
              Contact
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
