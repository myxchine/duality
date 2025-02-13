import Link from "next/link";
import { Row } from "@/components/ui/components";
const navItems = [
  { label: "Home", href: "/" },
  { label: "Sites", href: "/sites" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/articles/about" },
  { label: "Contact", href: "/contact" },
];

import { getAllArticles, getAllSites } from "@/server/api";

export const dynamic = "force-static";

export default async function Footer() {
  const articles = getAllArticles();
  const sites = getAllSites();
  const sites_nav = sites.map((site: Site) => ({
    label: site.title,
    href: `/sites/${site.slug}`,
  }));
  const articles_nav = articles.map((article: Article) => ({
    label: article.title,
    href: `/articles/${article.slug}`,
  }));
  return (
    <footer id="porto-footer" className="mt-12">
      <Row>
        <section className="flex flex-wrap justify-start  mdd:my-16 w-full gap-16 md:gap-24 ">
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
            <p className="   text-base">Menu</p>
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-foreground/60 font-regular `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
            <p className="   text-base">World Class Websites</p>
            {sites_nav.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-foreground/60 font-regular `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
            <p className="   text-base">Explore</p>
            {articles_nav.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-foreground/60 font-regular `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className=" flex-col items-start gap-4 w-fit md:gap-6 max-w-[320px] hidden">
            <p className=" font-custom font-semibold text-base">Information</p>
            <p className="text-foreground/60  ">Niks</p>
          </div>
        </section>

        <p className="flex flex-col items-center text-center gap-4 text-sm w-full mt-4 md:mt-8 ">
          &copy; 2025 - Verzes - All Rights Reserved
        </p>
      </Row>
    </footer>
  );
}
