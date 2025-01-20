import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Articles({
  articles,
  cols,
  h3,
  lineclamp,
}: {
  articles: Article[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={` grid text-left w-full gap-4 md:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {articles.map((article) => (
        <Link
          href={`/articles/${article.slug}`}
          className=" hover:scale-105 transition-transform flex flex-col gap-4 relative rounded-2xl overflow-hidden bg-accent text-background"
          key={article.slug}
        >
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={300}
            className=" w-full object-cover aspect-[4/5] md:aspect-[13/9] mb-[70px] md:mb-[90px]"
          />

          <div className="z-10 w-full flex flex-col gap-2 md:gap-4 absolute bottom-0 left-0 p-3 md:p-5">
            {h3 ? (
              <h3 className="line-clamp-2">{article.title}</h3>
            ) : (
              <h2 className="line-clamp-2">{article.title}</h2>
            )}
            <p
              className={
                lineclamp
                  ? "line-clamp-2 normal-case"
                  : "normal-case line-clamp-2"
              }
            >
              {article.excerpt}
            </p>
            <span className="hover:underline ">Read More {"->"}</span>
          </div>
          <div className="bottomupgradient absolute bottom-0 left-0 w-full h-[80%]  md:h-[90%]" />
        </Link>
      ))}
    </div>
  );
}
