import { blog } from "@/server/db/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Section, Row } from "@/components/ui";
import Link from "next/link";
export async function generateStaticParams() {
  return blog.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blog.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.heading,
    description: post.paragraph,
  };
}

export default function Site({ params }: { params: { slug: string } }) {
  const post = blog.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  return (
    <Section>
      <Row>
        <h1>{post.heading}</h1>

        <p>{post.paragraph}</p>

        <Link
          href={"/contact"}
          className="w-full mt-4 max-w-md font-semibold hover:underline "
        >
          Contact Me {"->"}
        </Link>
      </Row>
    </Section>
  );
}
