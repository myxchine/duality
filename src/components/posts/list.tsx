import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
export async function PostList({ posts, h3 }: { posts: Post[]; h3?: boolean }) {
  const t = await getTranslations("Posts");
  return (
    <div className={`grid text-left gap-8 grid-cols-1`}>
      {posts.map((post) => (
        <Link
          href={`/${post.slug}`}
          className="flex flex-col gap-4"
          key={post.slug}
        >
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={300}
            className=" w-full object-cover aspect-[16/9] my-4 rounded"
          />
          {h3 ? (
            <h3 className="line-clamp-2">{post.title}</h3>
          ) : (
            <h2 className="line-clamp-2">{post.title}</h2>
          )}
          <p className={"line-clamp-3 normal-case"}>{post.excerpt}</p>
          <span className="hover:underline text-accent">
            {t("read")} {"->"}
          </span>
        </Link>
      ))}
    </div>
  );
}
