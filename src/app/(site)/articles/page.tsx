import { Metadata } from "next";
import { getAllArticles } from "@/server/api";
import { Section, Button, Row, Component } from "@/components/ui/components";
import Articles from "@/components/articles";
import { SuggestedsitesList } from "@/components/suggested-sites";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Learn about finding you dream home in Porto, Portugal. From articulate articles written by our team of experts.",
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  return (
    <>
      <Section>
        <Row centered>
          <Component centered small padding>
            <h1>Articles</h1>
            <p>
              Learn about world class website design and development. From
              articulate articles written by our team of experts.
            </p>
          </Component>
          <Articles articles={articles} />
        </Row>

        <SuggestedsitesList />
      </Section>
    </>
  );
}
