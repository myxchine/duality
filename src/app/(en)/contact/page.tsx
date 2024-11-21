import Form from "./_components/Form";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact me about your idea",
  description:
    "We create websites for clients and for ourselves. We are a team of creatives and developers who love to build websites. We love to work with clients to create websites that are beautiful, functional, and easy to use. We also love to work on our own projects and to learn new things.",
};

export default function Calculate({ searchParams }: { searchParams: any }) {
  return (
    <div className="w-full full-screen fixed top-0 left-0">
      <div className="flex flex-col max-w-4xl mx-auto gap-4 p-8 full-screen justify-center ">
        <Link href="/" className="flex flex-col  text-foreground">
          <p className="font-custom text-2xl md:text-3xl uppercase">
            Michael Dos Santos
          </p>
          <h1>Contact Me</h1>
        </Link>
        <p>
          Or contact me directly at{" "}
          <a href="mailto:michael.dozzantoz@gmail.com" className="underline">
            michael.dozzantoz@gmail.com
          </a>{" "}
          or{" "}
          <a href="tel:+351 964 691 830" className="underline">
            +351 964 691 830
          </a>
        </p>
        <Form searchParams={searchParams} />
      </div>
    </div>
  );
}
