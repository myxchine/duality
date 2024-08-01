import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-foreground  flex flex-col items-center justify-center gap-6 py-6 md:py-24 w-full">
      <div>
        <div className="flex flex-row  max-w-5xl mx-auto ">
          <div className="  w-16 ">
            <div className=" md:h-[62px] h-[58px] " />
            <div className="h-[154px]  md:h-[226px] border-y border-dashed border-foreground/50" />
            <div className="h-[154px] md: h-[160px]" />
          </div>
          <Main />
          <div className="  w-16 ">
            <div className=" md:h-[62px] h-[58px] " />
            <div className="h-[154px]  md:h-[226px] border-y border-dashed border-foreground/50" />
            <div className="h-[154px] md: h-[160px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center  text-center">
      <div className="flex flex-col gap-4 border-x border-foreground/50 border-dashed p-4 mb-[2px] w-full">
        <h1 className="text-sm text-center max-w-3xl text-balance text-foreground/60 md:text-xl">
          I know how to <span className="text-foreground">Create Websites</span>
        </h1>
      </div>

      <h1 className="text-5xl text-center w-full max-w-3xl font-bold leading-tight font-bold  md:text-8xl tracking-tighter text-balance  border p-4 border-foreground/50 border-dashed">
        And I am <span className="text-accent ">****</span> good at it
      </h1>
      <div className="flex flex-col gap-4 border-x border-foreground/50 border-dashed p-4 mt-[2px] w-full max-w-3xl pb-6">
        <p className="text-center text-sm text-foreground/60 md:text-xl leading-loose max-w-2xl text-balance   ">
          I curate fully custom, quality and fast web sites to your wildest
          imagination.
        </p>

        <div className="flex flex-row items-center justify-center gap-4  w-full max-w-md mx-auto ">
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
