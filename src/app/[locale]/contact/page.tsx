import { Metadata } from "next";
import { Section, Row, Block } from "@/components/ui";
import Form from "./form";
import { Faqs } from "@/components/faqs";
export const metadata: Metadata = {
  title: "Let's Build your Website Today",
  description:
    "We reply quickly! Communication is a priority when you work with us.",
};

export default async function Calculate() {
  return (
    <>
      <Section full grey>
        <Row padding centered>
          <Block small>
            <Block>
              <h1>Let's Build your Website Today</h1>
              <p className="max-w-xl text-balance">
                We reply quickly! Communication is a priority when you work with
                us.
              </p>
            </Block>

            <Form />
            <p>
              Or contact us directly at{" "}
              <a
                href="tel:+351 964 691 830"
                className="underline lowercase hover:text-accent"
              >
                +351 964 691 830
              </a>
            </p>
          </Block>
        </Row>
      </Section>
    </>
  );
}
