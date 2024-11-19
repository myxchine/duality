import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
