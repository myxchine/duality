import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/server/posts/utils";
import markdownToHtml from "@/server/posts/helpers";
import Image from "next/image";
import { Row, Section } from "@/components/ui";
import SuggestedPosts from "@/components/posts/suggested";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return notFound();
  }
  const content = await markdownToHtml(post.content);
  return (
    <>
      <Section>
        <Row>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={600}
            priority={true}
            className="w-full h-auto aspect-[4/3] md:aspect-[21/9] object-cover my-4 max-w-4xl rounded-xl"
          />
        </Row>
        <Row>
          <div
            className="flex flex-col gap-8 article-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Row>
      </Section>
      <Section>
        <SuggestedPosts currentPost={post} />
      </Section>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return notFound();
  }
  const title = post.title;
  const description = post.excerpt;
  return {
    title: title,
    description: description,
    openGraph: {
      title,
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}
