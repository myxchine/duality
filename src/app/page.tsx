import Hero from "./_components/Hero";
import Showcase from "./_components/Showcase";
import Portfolio from "./portfolio/page";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
    </main>
  );
}

function ImageHero() {
  return (
    <section className="flex flex-col w-full relative md:flex-row max-w-6xl mx-auto md:py-12 items-center justify-center">
      <Image
        src="/images/hero3.jpg"
        alt="Michael Dos Santos - Designer & Developer based in Portugal"
        className="md:aspect-square object-cover objext-position-bottom"
        width={500}
        height={800}
        objectPosition="center"
        priority={true}
      />
      <Main />
    </section>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-start justify-start  text-left absolute top-0 left-0 right-0 bottom-0 gap-4 p-6 md:relative">
      <h1 className="text-3xl text-center w-full max-w-3xl font-bold leading-tight font-bold  md:text-8xl tracking-tighter text-balance   ">
        Web Designer & Developer
      </h1>
      <div className="flex flex-col gap-4     w-full max-w-3xl ">
        <p className="text-center text-sm text-foreground/60 md:text-xl leading-loose max-w-2xl text-balance   ">
          I curate fully custom, quality and fast websites to your wildest
          imagination.
        </p>

        <div className="flex flex-row items-center justify-center gap-4  w-full max-w-md mx-auto mt-2">
          <Link href="/contact" className="w-full">
            <button className="px-4 py-2 w-full border rounded bg-foreground text-background hover:bg-background hover:text-foreground border-foreground md:text-lg">
              Contact
            </button>
          </Link>
          <Link href="/portfolio" className="w-full">
            <button className="px-4 py-2 w-full border rounded border-foreground/20 hover:border-foreground hover:text-foreground md:text-lg">
              Portfolio
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
