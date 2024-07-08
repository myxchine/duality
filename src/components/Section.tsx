export default function Section() {
  return (
    <section className="flex flex-col items-start justify-center gap-6 p-6 text-white py-12 max-w-6xl mx-auto md:py-24 md:gap-10">
      <h2 className="text-4xl font-semibold text-balance">
        Don't settle for one size fits all web products.
      </h2>
      <button className="px-4 py-2 w-fit border rounded bg-white text-black hover:bg-black hover:text-white border-white">
        Contact Us
      </button>

      <div className="flex grid grid-cols-1 gap-4 text-center md:grid-cols-3 w-full">
        <div className="flex flex-col border border-white/20 p-4 rounded w-full">
          <h3>FAST</h3>
        </div>
        <div className="flex flex-col border border-white/20 p-4 rounded w-full">
          <h3>Quality</h3>
        </div>
        <div className="flex flex-col border border-white/20 p-4 rounded w-full">
          <h3>Cost</h3>
        </div>
      </div>
    </section>
  );
}
