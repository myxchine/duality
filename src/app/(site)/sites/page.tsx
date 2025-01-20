import { Metadata } from "next";
import { getAllArticles, getAllSites } from "@/server/api";
import { Section, Button, Row, Component } from "@/components/ui/components";
import Articles from "@/components/articles";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import Sites from "@/components/sites";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Learn about finding you dream home in Porto, Portugal. From articulate articles written by our team of experts.",
};

export default function ArticlesPage() {
  const sites = getAllSites();
  return (
    <>
      <Section>
        <Row centered>
          <Component centered small padding>
            <h1>Our Sites</h1>
            <p>
              See some of our world class sites to learn about how we prioritise
              user experience, speed and functionality.
            </p>
          </Component>
          <Sites sites={sites} />
        </Row>

        <SuggestedArticlesList />
      </Section>
    </>
  );
}
