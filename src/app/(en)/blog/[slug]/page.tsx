import { blog } from "../../_data/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
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
    <section className="flex flex-col  w-full gap-8     items-center flex-shrink-0  relative overflow-hidden max-w-6xl mx-auto px-6 py-12 mt-[68px] md:flex-row">
      <div className="flex flex-col gap-4 w-full ">
        <h1 className="text-2xl md:text-3xl font-bold">{post.heading}</h1>

        <div className="flex flex-col gap-4 w-full">
          <p className=" ">{post.paragraph}</p>
        </div>

        <Link
          href={"/contact"}
          className="w-full mt-4 max-w-md font-semibold hover:underline"
        >
          Contact Us {"->"}
        </Link>
      </div>
    </section>
  );
}
