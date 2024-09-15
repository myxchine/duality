import { MetadataRoute } from "next";
import { blog } from "@/server/db/blog";
import { sites } from "@/server/db/sites";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitesSitemap: MetadataRoute.Sitemap = sites.map(({ slug }) => ({
    url: `https://michaelsantos.pt/clients/${slug}`,
    alternates: {
      languages: {
        en: `https://michaelsantos.pt/clients/${slug}`,
      },
    },
  }));

  const blogsSitemap: MetadataRoute.Sitemap = blog.map(({ slug }) => ({
    url: `https://michaelsantos.pt/blog/${slug}`,
    alternates: {
      languages: {
        en: `https://michaelsantos.pt/blog/${slug}`,
      },
    },
  }));

  return [
    {
      url: `https://michaelsantos.pt`,
      alternates: {
        languages: {
          en: "https://michaelsantos.pt",
        },
      },
    },

    {
      url: `https://michaelsantos.pt/contact`,
      alternates: {
        languages: {
          en: "https://michaelsantos.pt/contact",
        },
      },
    },

    {
      url: `https://michaelsantos.pt/clients`,
      alternates: {
        languages: {
          en: "https://michaelsantos.pt/clients",
        },
      },
    },

    ...sitesSitemap,

    {
      url: `https://michaelsantos.pt/blog`,
      alternates: {
        languages: {
          en: "https://michaelsantos.pt/blog",
        },
      },
    },

    ...blogsSitemap,
  ];
}
