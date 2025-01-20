import { Section, Row, Component } from "@/components/ui/components";
import siteList from "./sites";
import { getAllSites } from "@/server/api";
import Sites from "./sites";

export function SuggestedsitesList({ currentsite }: { currentsite?: Site }) {
  const sites = getAllSites();
  const othersites = sites.filter((site) => site.slug !== currentsite?.slug);

  return (
    <Row>
      <Component small>
        <h2>Some of our work</h2>
        <p>Take a look at world class websites we run.</p>
      </Component>
      <Sites sites={othersites} h3 />
    </Row>
  );
}
