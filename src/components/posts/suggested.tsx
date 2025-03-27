import { Row } from "@/components/ui";
import { PostList } from "./list";
import { getAllPosts } from "@/server/posts/utils";
import { getTranslations } from "next-intl/server";
export default async function SuggestedPostsList({
  currentPost,
}: {
  currentPost?: Post;
}) {
  const t = await getTranslations("SuggestedPosts");
  const Posts = await getAllPosts();
  const otherPosts = Posts.filter(
    (post: Post) => post.slug !== currentPost?.slug
  );
  return (
    <Row centered>
      <h2>{t("title")}</h2>
      <PostList posts={otherPosts} h3 />
    </Row>
  );
}
