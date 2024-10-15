import { sites } from "@/server/db/sites";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Section, Row } from "@/components/ui";
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
    <Section>
      <Row>
        <Image
          src={`/images/sites/${site.desktopImage}`}
          alt={site.title}
          width={800}
          height={500}
          priority={true}
          className="w-full h-auto rounded-md border border-foreground/20 shadow-md md:w-1/2 mb-8"
        />

        <h2>{site.title}</h2>

        <p>{site.description}</p>
        <Link
          href={site.url}
          prefetch={false}
          rel="noopener noreferrer"
          target="_blank"
          className="px-4 py-2 max-w-md mt-4 w-full text-center border rounded bg-foreground text-background hover:bg-transparent hover:text-foreground border-foreground md:text-lg"
        >
          Visit Website
        </Link>
      </Row>
    </Section>
  );
}
