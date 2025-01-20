import { Section, Row, Component } from "@/components/ui/components";
import ArticleList from "./articles";
import { getAllArticles } from "@/server/api";

export function SuggestedArticlesList({
  currentarticle,
}: {
  currentarticle?: Article;
}) {
  const articles = getAllArticles();
  const otherarticles = articles.filter(
    (article) => article.slug !== currentarticle?.slug
  );

  return (
    <Row>
      <Component small>
        <h2>Premium Website Design and Development</h2>
        <p>
          Learn about world class website design and development. From
          articulate articles written by our team of experts.
        </p>
      </Component>
      <ArticleList articles={otherarticles} h3 />
    </Row>
  );
}
