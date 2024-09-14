import Link from "next/link";

const heroDict = {
  en: {
    title: "Pro Web Development and Design in",
    titleAccent: "Portugal",
    description:
      "We specialise in curating strategic, quality, fast and professional sites for your business.",
    button1: "Contact Us",
    button2: "Our Work",
  },
  pt: {
    title: "Agência de Desenvolvimento Web & Design",
    titleAccent: "Portugal",
    description:
      "Somos especializados em curadoria de sites estratégicos, de qualidade, rápidos e profissionais para o seu negócio.",
    button1: "Contacte-nos",
    button2: "Nossos Clientes",
  },
};

export default function Hero() {
  return (
    <section className="text-foreground  flex flex-col items-center justify-center gap-6 py-6 md:py-48 w-full relative grid-container   z-[2]">
      <div className="grid-lines" />

      <Main />
    </section>
  );
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center  text-center z-[10000] mt-8 pt-4 pb-8">
      <div className="flex flex-col gap-4 p-4  w-full">
        <p className="text-sm text-center max-w-3xl text-balance text-foreground/60 md:text-xl">
          Pro web development and design in{" "}
          <span className="text-foreground">Portugal</span>
        </p>
      </div>
      <h1 className="text-5xl text-center w-full max-w-3xl font-bold leading-tight font-bold  md:text-6xl  text-pretty  p-4 ">
        Custom Web Designer & Developer in Portugal
      </h1>
      <p className="text-center text-sm  md:text-xl leading-loose max-w-2xl text-balance mx-auto  p-4">
        Making your custom, beautiful and fast website dreams come true.
      </p>
      <div className="flex  flex-col md:flex-row items-center justify-center gap-4  w-full max-w-lg mx-auto p-4 px-12 mt-1">
        <Link href={`/clients`} className="w-full">
          <button className="px-4 py-2 w-full border rounded bg-foreground text-background hover:bg-transparent hover:text-foreground border-foreground md:text-lg">
            My Clients
          </button>
        </Link>
        <Link href={`/contact`} className="w-full">
          <button className="px-4 py-2 w-full border rounded border-foreground/20 hover:border-foreground hover:text-foreground md:text-lg">
            Get a Quote
          </button>
        </Link>
      </div>
    </div>
  );
}
