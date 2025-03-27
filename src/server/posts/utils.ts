import fs from "fs";
import matter from "gray-matter";
import { getLocale } from "next-intl/server";
import { join } from "path";
import { routing } from "@/i18n/routing";

async function getPostDirectory() {
  const locale = await getLocale();
  return join(process.cwd(), "_posts", locale);
}

export async function getPostSlugs() {
  const postsDirectory = await getPostDirectory();
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const postsDirectory = await getPostDirectory();
  try {
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug: realSlug, content } as Post;
  } catch (e) {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  try {
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
    return posts
      .filter((post): post is Post => post !== null)
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(join(process.cwd(), "_posts", routing.defaultLocale))
    .map((slug) => slug.replace(/\.md$/, ""));
}
