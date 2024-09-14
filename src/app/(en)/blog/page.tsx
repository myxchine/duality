import { blog } from "../_data/blog";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "My Blog",
  description:
    "Welcome to my community where I share my services, knowledge, and experiences with web development and design.",
};

export default function Blog() {
  return (
    <div className="w-full mt-[68px] md:mt-[120px]">
      <section className="flex flex-col gap-20 p-6 w-full max-w-6xl mx-auto xl:px-0">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl">My Blog</h1>
          <p className="text-sm text-foreground/60 md:text-lg text-balance">
            Welcome to my community where I share my services, knowledge, and
            experiences with web development and design.
          </p>
        </div>

        <BlogList />
      </section>
    </div>
  );
}

function BlogList() {
  return (
    <>
      {blog.map((blog) => (
        <div className="w-full md:py-12">
          <section className="flex flex-col gap-8  w-full max-w-6xl mx-auto px-0">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-3xl md:text-5xl text-balance">
                {blog.heading}
              </h2>
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
    </>
  );
}
