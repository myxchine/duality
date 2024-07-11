import Image from "next/image";
import Link from "next/link";
export default function PortfolioList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-4  w-full  max-w-6xl xl:px-0">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 ">
        {data.map((site) => (
          <PortfolioCard
            key={site.title.toLowerCase().replaceAll(" ", "-")}
            portfolio={site}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioCard({ portfolio }: { portfolio: any }) {
  return (
    <div className="flex flex-col  w-full gap-8 md:flex-row p-6 bg-secondary rounded-2xl items-center md:p-8 shadow">
      <Image
        src={`/images/sites/${portfolio.desktopImage}`}
        alt={portfolio.title.toLowerCase().replaceAll(" ", "-")}
        width={800}
        height={500}
        priority={true}
        className="w-full h-auto rounded-md border border-foreground/20 shadow-md md:w-1/2 "
      />

      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h2 className="text-3xl  md:block hidden">{portfolio.title}</h2>
        <h2 className="text-2xl block md:hidden">{portfolio.title}</h2>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-sm text-foreground/50">{portfolio.description}</p>

          <Link href={portfolio.url} className="w-fit mt-4">
            <button className="px-8 border border-transparent py-2 w-full rounded-full bg-accent text-background hover:bg-secondary hover:text-foreground hover:border-foreground hover:bg-none">
              Visit Site
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
