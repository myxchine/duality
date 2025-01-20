import { getAllSites, getAllArticles } from "@/server/api";
import Sites from "@/components/sites";
import Articles from "@/components/articles";
import { Section, Row, Component } from "@/components/ui/components";
import Link from "next/link";
export default function Home() {
  const sites = getAllSites();
  const articles = getAllArticles();
  return (
    <>
      <Section>
        <Row>
          <Component small centered padding>
            <h1>Premium Website Design & Development</h1>
            <p>
              We architect optimised websites and user experiences resulting in
              world class <strong>lead generation and conversion</strong>.
            </p>

            <div className="flex flex-row gap-2 mt-2">
              <Link
                href="/sites"
                className="bg-foreground text-sm text-accent px-6 py-2 rounded-xl hover:bg-foreground/80  "
              >
                See Premium Sites
              </Link>
              <Link
                href="/articles"
                className="bg-foreground/10 text-sm text-foreground px-6 py-2 rounded-xl hover:bg-foreground/20  "
              >
                Explore Web
              </Link>
            </div>
          </Component>
        </Row>

        <Row>
          <Component small>
            <h2>Tools for your Business</h2>
            <p>
              Learn about the power of the internet for your business. Don't
              lose on opportunity cost.
            </p>
          </Component>
          <Articles articles={articles} h3 />
        </Row>

        <Row centered>
          <Component padding small centered>
            <h2>Specialists in User Experience and Site Architecture</h2>

            <p className="max-w-sm">
              We believe all businesses should have{" "}
              <strong>the opportunity to benefit from</strong> the free organic
              growth acquired from having a world class website that is
              optimised for the web allowing{" "}
              <strong>your customers to find you.</strong>
            </p>

            <Link
              href="/contact"
              className="bg-foreground mt-3 text-sm text-accent px-6 py-2 rounded-xl hover:bg-foreground/80  "
            >
              Contact Us
            </Link>
          </Component>
        </Row>

        <Row>
          <Component small>
            <h2>World Class Websites</h2>
            <p>
              Below are some of our custom architected sites for you to explore.
            </p>
          </Component>
          <Sites sites={sites} h3 />
        </Row>
      </Section>
    </>
  );
}
