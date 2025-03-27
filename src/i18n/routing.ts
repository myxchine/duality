import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en"],
  defaultLocale: "en",
  localeDetection: false,
  localePrefix: "as-needed",
});
