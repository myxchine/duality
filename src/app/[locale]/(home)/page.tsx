import { Block, Row, Section } from "@/components/ui";
import Link from "next/link";
import { Faqs } from "@/components/faqs";
import System from "./system";
import Hero from "./hero";
import Founder from "./founder";
import Testimonial from "@/components/testimonial";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <Section full grey>
        <Row padding>
          <Hero />
        </Row>
      </Section>
      <Section>
        <Row padding centered>
          <Block small centered>
            <h2>{t("features.guarantee.title")}</h2>
            <p>{t("features.guarantee.description")}</p>
          </Block>
          <Block small centered>
            <h2>{t("features.process.title")}</h2>
            <p>{t("features.process.description")}</p>
          </Block>
        </Row>
      </Section>
    </>
  );
}

/*
    <Block small>
            <h2>An offer so good you can't say no...</h2>
            <p>
              Take a look at our offers and find which one is the best fit for
              you. We'll guide you through the process and help you make the
              right decision.
            </p>
          </Block>
          */

function Old() {
  return (
    <Section>
      <System />
      <Row>
        <Block centered small>
          <h2>No time to build your website yourself?</h2>
          <p>
            <strong>Running a business is difficult</strong> and takes a lot of
            time, even if you use all the free resources available online (like
            we provide{" "}
            <Link href="/articles" className="underline">
              {" "}
              here
            </Link>
            ) to build your website, you'll still need to put{" "}
            <strong>hours of work weekly</strong> which for growing businesses
            isn't possible <strong>for a founder</strong> with already so much
            to juggle.
          </p>
          <p>
            In this case we recomend <strong>out-sourcing the work</strong> to
            specialists allowing you to{" "}
            <strong>benefit from organic traffic</strong> whilst having all that{" "}
            <strong>saved time </strong>to do with as you please!
          </p>

          <Link
            href="/contact"
            className="hover:underline mt-2 text-foreground/80 font-normal"
          >
            Free Consultation {"->"}
          </Link>
        </Block>

        <Block small>
          <h2 className="mt-10 md:mt-12">
            Premium Web Design & Development for Your Business
          </h2>
          <p>
            We have spent years optimising online experiences for businesses to
            attract and convert high life time value customers. Below are some
            case studies for you to explore.
          </p>
        </Block>
      </Row>
      <section
        id="testimonial"
        className="mx-auto mt-8 max-w-xl sm:mt-12 lg:max-w-6xl p-4 mb-8 md:mb-16"
        aria-labelledby="testimonial"
      >
        <Testimonial />
      </section>
      <Founder />
      <Faqs />
      <Row>
        <Block small>
          <h2>Resources for your Business to Grow Online</h2>
          <p>
            Learn about the power of the internet for your marketing your
            business and letting the world know who you are. Don't lose on
            opportunity cost.
          </p>
        </Block>
      </Row>
    </Section>
  );
}
