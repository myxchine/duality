import Form from "./_components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us about your idea",
  description:
    "We build websites for clients and for ourselves. We are a team of creatives and developers who love to build websites. We love to work with clients to create websites that are beautiful, functional, and easy to use. We also love to work on our own projects and to learn new things.",
};

export default function Calculate({ searchParams }: { searchParams: any }) {
  return (
    <div className="  gap-4 flex flex-col w-full">
      <h1 className="text-6xl md:text-8xl w-full xl:px-0 font-bold text-left text-balance tracking-tighter p-6 pb-0  max-w-4xl mx-auto md:py-12 text-foreground">
        Let's get <span className="text-gradient">in touch</span>
      </h1>
      <Form searchParams={searchParams} />
    </div>
  );
}
