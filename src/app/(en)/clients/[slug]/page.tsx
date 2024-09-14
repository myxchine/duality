import { sites } from "@/server/db/sites";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return sites.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const site = sites.find((site) => site.slug === params.slug);

  if (!site) {
    notFound();
  }

  return {
    title: site.title,
    description: site.description,
    openGraph: {
      images: [
        {
          url: site.desktopImage,
          alt: site.slug,
        },
      ],
    },
  };
}

export default function Site({ params }: { params: { slug: string } }) {
  const site = sites.find((site) => site.slug === params.slug);

  if (!site) {
    notFound();
  }
  return (
    <section className="flex flex-col  w-full gap-8     items-center flex-shrink-0  relative overflow-hidden max-w-6xl mx-auto px-6 py-12 mt-[68px] md:flex-row">
      <Image
        src={`/images/sites/${site.desktopImage}`}
        alt={site.title}
        width={800}
        height={500}
        priority={true}
        className="w-full h-auto rounded-md border border-foreground/20 shadow-md md:w-1/2 "
      />

      <div className="flex flex-col gap-4 w-full ">
        <h2 className="text-xl md:text-3xl line-clamp-1">{site.title}</h2>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-sm text-foreground/50 line-clamp-2">
            {site.description}
          </p>
        </div>
        <Link href={site.url} className="w-full mt-4 max-w-md">
          <button className="px-4 py-2 w-full border rounded bg-foreground text-background hover:bg-transparent hover:text-foreground border-foreground md:text-lg">
            Visit Website
          </button>
        </Link>
      </div>
    </section>
  );
}
