import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-foreground  flex flex-col items-center justify-center gap-6 py-2 md:py-48 w-full relative grid-container   z-[2]">
      <div className="grid-lines" />

      <Main />
    </section>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center  text-center z-[10000] mt-4 pt-4 pb-4 gap-4 md:gap-6">
      <h1 className="text-6xl md:text-7xl text-center w-full max-w-3xl leading-tight   md:text-6xl  text-balance   ">
        Custom Web Developer & Designer in Portugal
      </h1>
      <p className="text-center text-sm  md:text-xl leading-loose max-w-xl text-balance mx-auto  ">
        Making your custom, beautiful and fast website dreams come true.
      </p>
      <div className="flex  flex-col md:flex-row items-center justify-center gap-4  w-full max-w-lg mx-auto p-4 px-12 mt-1">
        <Link
          href={`/clients`}
          className="px-4 py-2 w-full border  bg-foreground text-background hover:bg-transparent hover:text-foreground border-foreground md:text-lg"
        >
          My Clients
        </Link>
        <Link
          href={`/contact`}
          className="px-4 py-2 w-full border  border-foreground/20 hover:border-foreground hover:text-foreground md:text-lg"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
