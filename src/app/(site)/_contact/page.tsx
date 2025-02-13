import { Metadata } from "next";
import { Section, Row, Component } from "@/components/ui/components";
import Form from "./form";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import { SuggestedsitesList } from "@/components/suggested-sites";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us and get in touch with us. We are here to help you with your needs. Or contact us directly at +351 964 691 830",
};

export default async function Calculate() {
  return (
    <>
      <Section>
        <Row>
          <Component padding centered small>
            <Component centered>
              <h1>Contact Us</h1>
              <p className="max-w-md text-balance">
                Contact us and get in touch with us. We are here to help you
                with your needs. Or contact us directly at{" "}
                <a
                  href="tel:+351 964 691 830"
                  className="underline lowercase hover:text-accent "
                >
                  +351 964 691 830
                </a>
              </p>
            </Component>

            <Form />
          </Component>
        </Row>
        <SuggestedArticlesList />
        <SuggestedsitesList />
      </Section>
    </>
  );
}
