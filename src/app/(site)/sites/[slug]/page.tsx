import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSites, getSiteBySlug } from "@/server/api";
import markdownToHtml from "@/server/mdtohtml";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import Image from "next/image";
import { Row, Section, Button, Component } from "@/components/ui/components";
import { SuggestedsitesList } from "@/components/suggested-sites";
export default async function sitePage({ params }: Params) {
  const slug = (await params).slug;
  const site = getSiteBySlug(slug);

  if (!site) {
    return notFound();
  }

  const content = await markdownToHtml(site.content);

  return (
    <>
      <Section>
        <Row>
          <Component>
            <div className="flex rounded-2xl overflow-hidden flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative w-full text-background bg-accent">
              <Image
                src={site.image}
                alt={site.title}
                width={1200}
                height={800}
                priority
                className="aspect-[3/3] md:aspect-[16/9] object-cover w-full  mb-[40px] object-top"
              />

              <div className="z-10 w-full flex flex-col text-center justify-center items-center  gap-2 md:gap-4 absolute bottom-0  p-5 md:p-8 max-w-2xl mx-auto">
                <h1>{site.title}</h1>
                <a
                  href={"https://" + site.url}
                  target="_blank"
                  rel="noreferrer"
                  className="url"
                >
                  {site.url}{" "}
                </a>
                <p>{site.excerpt}</p>
              </div>

              <div className="bottomupgradient absolute bottom-[40px]  left-0 w-full h-[50%]  md:h-[35%]" />
            </div>
          </Component>
        </Row>
      </Section>

      <Section>
        <SuggestedsitesList currentsite={site} />
      </Section>

      <Section>
        <SuggestedArticlesList />
      </Section>
    </>
  );
}

/*
       <div
              className="flex flex-col gap-4 article-content mb-8 max-w-3xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
*/

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const site = getSiteBySlug(slug);

  if (!site) {
    return notFound();
  }

  const title = site.title;
  const description = site.excerpt;

  return {
    title: title,
    description: description,
    openGraph: {
      title,
      images: [site.image],
    },
  };
}

export async function generateStaticParams() {
  const sites = getAllSites();

  return sites.map((site: Site) => ({
    slug: site.slug,
  }));
}
