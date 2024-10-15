import { blog } from "@/server/db/blog";
import { Metadata } from "next";
import Link from "next/link";
import { Section, Row } from "@/components/ui";
export const metadata: Metadata = {
  title: "My Blog",
  description:
    "Welcome to my community where I share my services, knowledge, and experiences with web development and design.",
};

export default function Blog() {
  return (
    <Section>
      <Row>
        <h1>My Blog</h1>
        <p className=" text-balance">
          Welcome to my community where I share my services, knowledge, and
          experiences with web development and design.
        </p>
      </Row>
      <Row>
        <BlogList />
      </Row>
    </Section>
  );
}

function BlogList() {
  return (
    <section className="flex flex-col gap-12 w-full">
      {blog.map((blog) => (
        <div className="w-full md:py-12">
          <section className="flex flex-col gap-8  w-full max-w-6xl mx-auto px-0">
            <div className="flex flex-col gap-4 ">
              <h2>{blog.heading}</h2>
              <p className="text-sm text-foreground md:text-lg">
                {blog.paragraph}
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="font-semibold hover:underline"
              >
                Read More {"->"}
              </Link>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}
