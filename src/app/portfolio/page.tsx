import { sites } from "@/server/db/sites";
import PortfolioList from "@/app/_components/PortfolioList";

export default function Portfolio() {
  return (
    <div className="w-full mt-[68px]">
      <section className="flex flex-col gap-8 p-6 w-full max-w-6xl mx-auto xl:px-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl">Projects</h1>
          <p className="text-sm text-foreground/60 md:text-lg">
            Take a look at some projects we run.
          </p>
        </div>

        <PortfolioList data={sites} />
      </section>
    </div>
  );
}
