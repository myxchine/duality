import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const articlesDirectory = join(process.cwd(), "_articles");
const sitesDirectory = join(process.cwd(), "_sites");

export function getSites() {
  return fs.readdirSync(sitesDirectory);
}

export function getSiteBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");

  try {
    const fullPath = join(sitesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Site;
  } catch (e) {
    return null;
  }
}

export function getAllSites(): Site[] {
  const slugs = getSites();

  try {
    const sites = slugs
      .map((slug) => getSiteBySlug(slug))
      ?.filter((site) => site !== null)
      .sort((site1, site2) => (site1.date > site2.date ? -1 : 1));

    return sites as Site[];
  } catch (e) {
    return [];
  }
}

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");

  try {
    const fullPath = join(articlesDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Article;
  } catch (e) {
    return null;
  }
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();

  try {
    const articles = slugs
      .map((slug) => getArticleBySlug(slug))
      ?.filter((article) => article !== null)
      .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
    return articles;
  } catch (e) {
    return [];
  }
}
