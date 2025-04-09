import { Block } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import PartnersMarquee from "./marquee";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("HomePage.hero");
  return (
    <div className="flex flex-col items-center justify-center gap-12 md:gap-14">
      <Block centered>
        <h1 className="max-w-2xl mx-auto">{t("title")}</h1>
        <p className="text-base md:text-xl max-w-[430px]  text-inherit ">
          {t("description")}
        </p>
        <div className="flex flex-row md:flex-row gap-3 md:gap-4 mt-2 w-fit">
          <Link href="/contact" className="primary-button">
            {t("CTA")}{" "}
            <span className="font-sans font-bold text-base tracking-normal">
              {"->"}
            </span>
          </Link>
        </div>
      </Block>
      <Block>
        <p className="!font-medium !font-accent !text-black/40 w-full text-center md:pb-4 text-lg md:text-3xl">
          {t("TrustedBy")}
        </p>
        <PartnersMarquee
          partners={[
            {
              name: "The Thinkings",
              logo: "/think.png",
              website: "https://www.thethinkings.com",
            },
            {
              name: "Couturer",
              logo: "/couturer.png",
              website: "https://couturer.com",
            },
            {
              name: "TDS",
              logo: "/tds.svg",
              website: "https://tdsenduroalgarve.com",
            },
            {
              name: "MotoFM",
              logo: "/motofm.png",
              website: "https://motofm.com",
            },

            {
              name: "Just Baked",
              logo: "/just-baked.png",
              website: "https://justbaked.pt",
            },

            {
              name: "Archie Construction",
              logo: "/archie.svg",
              website: "https://archieconstruction.pt",
            },
            {
              name: "Fazenda Nova",
              logo: "/fazenda.webp",
              website: "https://www.fazendanova.eu",
            },
          ]}
        />
      </Block>
    </div>
  );
}

function Proof() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white flex flex-col items-center justify-center p-2 rounded-xl text-center gap-2">
        <h2 className="!text-base !md:text-lg font-medium">
          15+ Happy Clients
        </h2>
        <p className="text-xs md:text-sm">Who are still with us today</p>
      </div>
      <div className="bg-white flex flex-col items-center justify-center p-2 rounded-xl text-center gap-2">
        <h2 className="!text-base !md:text-lg font-medium">
          5+ Years Experience
        </h2>
        <p className="text-xs md:text-sm">Creating sites for businesses</p>
      </div>
    </div>
  );
}

function SocialProof() {
  return (
    <div className="flex flex-row w-fit gap-2 mt-2 md:mt-6">
      <p className="text-xs md:text-sm p-1 px-3 rounded-full  bg-white">
        20+ happy clients
      </p>
      <p className="text-xs md:text-sm p-1 px-3 rounded-full  bg-white">
        Over 5 years experience
      </p>
    </div>
  );
}

const headings = [
  "Stop losing leads, start converting them",
  "High-Converting Websites That Drive Growth in Lisbon",
  "Generate Organic Customers Online",
  "Your Website Should Be Your Best Salesperson—Is It?",
  "Your site isn’t making you money? Let’s fix that.",
];

const subheadings = [
  "We design & develop custom, results-focused websites that drive real business growth.",
  "If your site isn’t making you money, let’s fix that. We design & develop custom, results-focused websites that drive real business growth.",
  "We design & develop custom world-class websites that are exceptional at attracting high-value customers.",
  "Stop settling for an outdated site that leaks leads. We build high-performance, conversion-focused websites for Lisbon's ambitious Tech & Professional Services SMBs, backed by data, performance guarantees, and proven ROI. Partner with the experts focused on your bottom line.",
  "Stop losing leads with an old slow badly designed website, convert them with a data-driven, results-focused, traffic generating & conversion focused design and strategy prioritised for making you money.",
  "We have spent years optimising online experiences for businesses to attract and convert high life time value customers. Below are some case studies for you to explore.",
  "Our team handles everything with a streamlined, hassle-free process. Dedicated systems keep you updated with minimal involvement needed. We provide clear timelines and structured approvals to avoid delays. You don't need to lay a finger.",
  "We work closely with you in the discovery phase to ensure alignment from the start. Multiple revision rounds ensure you’re 100% satisfied before launch. You get access to prototypes and mockups before development begins.",
  "Once the customer is comfortable with your brand, we can clarify your offer and give them the opportunity to contact you.",
  "We have spent years optimising online experiences for businesses to attract and convert high life time value customers. Below are some case studies for you to explore.",
  "Our team handles everything with a streamlined, hassle-free process. Dedicated systems keep you updated with minimal involvement needed. We provide clear timelines and structured approvals to avoid delays. You don't need to lay a finger.",
  "We work closely with you in the discovery phase to ensure alignment from the start. Multiple revision rounds ensure you’re 100% satisfied before launch. You get access to prototypes and mockups before development begins.",
  "Once the customer is comfortable with your brand, we can clarify your offer and give them the opportunity to contact you.",
];
