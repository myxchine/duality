import Form from "./_components/Form";
import { Metadata } from "next";
import { Section, Row } from "@/components/ui";
export const metadata: Metadata = {
  title: "Contact us about your idea",
  description:
    "We create websites for clients and for ourselves. We are a team of creatives and developers who love to build websites. We love to work with clients to create websites that are beautiful, functional, and easy to use. We also love to work on our own projects and to learn new things.",
};

export default function Calculate({ searchParams }: { searchParams: any }) {
  return (
    <Section>
      <Row>
        <h1>
          Let's get <span className="text-">in touch</span>
        </h1>
        <p>
          Let's do something great together! Fill in the form below or contact
          me directly at{" "}
          <a href="mailto:michael@duality.agency" className="underline">
            michael@duality.agency
          </a>{" "}
          or{" "}
          <a href="tel:+351 964 691 830" className="underline">
            +351 964 691 830
          </a>
        </p>
        <Form searchParams={searchParams} />
      </Row>
    </Section>
  );
}
