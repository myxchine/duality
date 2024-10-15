import Image from "next/image";
import Link from "next/link";
export default function PortfolioList({ data }: { data: any[] }) {
  return (
    <div className="flex flex-col gap-4  w-full  max-w-6xl xl:px-0">
      <div className="grid grid-cols-1 gap-20  md:grid-cols-2 w-full">
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
    <Link
      href={`/clients/${portfolio.slug}`}
      className="flex flex-col  w-full gap-6     items-center flex-shrink-0  relative overflow-hidden "
    >
      <Image
        src={`/images/sites/${portfolio.desktopImage}`}
        alt={portfolio.title}
        width={800}
        height={500}
        priority={true}
        className="w-full h-auto object-cover rounded-md border border-foreground/20 shadow-md flex-1"
      />

      <div className="flex flex-col gap-4 w-full ">
        <h2>{portfolio.title}</h2>

        <p className="text-sm text-foreground/50 line-clamp-2 h-[40px]">
          {portfolio.description}
        </p>
      </div>
    </Link>
  );
}
