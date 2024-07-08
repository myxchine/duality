export default function Hero() {
  return (
    <section className="flex flex-col  p-6 text-white py-12 pt-28 gap-6 max-w-4xl mx-auto md:py-24 md:pt-48 md:gap-10">
      <div className="flex flex-col items-center justify-center gap-4 text-center w-full md:gap-6">
        <h1 className="font text-5xl text-center font-bold md:text-7xl uppercase max-w-3xl">
          We build Websites in Portugal
        </h1>
        <p className="   text-center text-sm text-white/60   md:text-xl  leading-loose max-w-2xl">
          Create quality, speedy and fully featured sites customized to your
          needs without limits or constraints.
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 px-2 w-full max-w-md mx-auto">
        <button className="px-4 py-2 w-full border rounded bg-white text-black hover:bg-black hover:text-white border-white md:text-lg">
          Free Quote
        </button>
        <button className="px-4 py-2 w-full border rounded border-white/20 hover:border-white hover:text-white md:text-lg">
          Explore
        </button>
      </div>
    </section>
  );
}
