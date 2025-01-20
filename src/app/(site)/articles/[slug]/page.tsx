import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/server/api";
import markdownToHtml from "@/server/mdtohtml";

import Image from "next/image";
import { Row, Section, Button, Component } from "@/components/ui/components";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import { SuggestedsitesList } from "@/components/suggested-sites";
export default async function ArticlePage({ params }: Params) {
  const slug = (await params).slug;
  const article = getArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content);

  return (
    <>
      <Section>
        <Row>
          <Component>
            <div className="mb-0 md:mb-6 flex rounded-2xl overflow-hidden flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative w-full text-background bg-accent">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={800}
                priority
                className="aspect-[3/3] md:aspect-[21/9] object-cover w-full  mb-[40px] "
              />

              <div className="z-10 w-full flex flex-col text-center justify-center items-center  gap-2 md:gap-4 absolute bottom-0  p-5 md:p-8 max-w-2xl mx-auto">
                <h1>{article.title}</h1>
                <p>{article.excerpt}</p>
              </div>

              <div className="bottomupgradient absolute bottom-[40px]  left-0 w-full h-[60%]" />
            </div>

            <div
              className="flex flex-col gap-4 article-content mb-8 max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Component>
        </Row>
      </Section>

      <Section>
        <SuggestedArticlesList currentarticle={article} />
      </Section>

      <Section>
        <SuggestedsitesList />
      </Section>
    </>
  );
}

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const article = getArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  const title = article.title;
  const description = article.excerpt;

  return {
    title: title,
    description: description,
    openGraph: {
      title,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}
