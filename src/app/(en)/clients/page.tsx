import { sites } from "@/server/db/sites";
import PortfolioList from "../_components/PortfolioList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Clients",
  description:
    "Learn about my work as a web developer and designer. Discover some of my active client websites.",
};

export default function Portfolio() {
  return (
    <div className="w-full mt-[68px] md:mt-[120px]">
      <section className="flex flex-col gap-20 p-6 w-full max-w-6xl mx-auto xl:px-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl">My Clients</h1>
          <p className="text-sm text-foreground/60 md:text-lg text-balance">
            Take a look at some of my active client websites to learn about my
            work as a web developer and designer.
          </p>
        </div>

        <PortfolioList data={sites} />
      </section>
    </div>
  );
}
