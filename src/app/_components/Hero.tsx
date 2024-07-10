import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-foreground py-12 flex flex-col items-center justify-center gap-6 p-6 md:gap-8">
      <div className="flex flex-col items-center justify-center gap-4 text-center w-full md:gap-8">
        <p className="text-sm text-center max-w-3xl text-balance text-foreground/60 md:text-xl">
          We only know how to{" "}
          <span className="text-foreground">Build Websites</span>
        </p>
        <h1 className="text-6xl text-center  max-w-3xl font-bold leading-tight  md:text-8xl tracking-tighter">
          But we are *** good at it
        </h1>

        <p className="text-center text-sm text-foreground/60 md:text-xl leading-loose max-w-2xl text-balance   ">
          Create quality, fast and full customs web sites to your wildest
          imagination.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-4  w-full max-w-md mx-auto">
        <Link href="/calculate" className="w-full">
          <button className="px-4 py-2 w-full border rounded bg-foreground text-background hover:bg-background hover:text-foreground border-foreground md:text-lg">
            Calculate Now
          </button>
        </Link>
        <Link href="/portfolio" className="w-full">
          <button className="px-4 py-2 w-full border rounded border-foreground/20 hover:border-foreground hover:text-foreground md:text-lg">
            Explore
          </button>
        </Link>
      </div>
    </section>
  );
}
