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
      <Section padding>
        <Row>
          <Block small centered>
            <h2>{t("features.guarantee.title")}</h2>
            <p>{t("features.guarantee.description")}</p>
          </Block>
          <Block small centered>
            <h2>{t("features.process.title")}</h2>
            <p>{t("features.process.description")}</p>
          </Block>
        </Row>
        <Row>
          <AscentFramework />
        </Row>
      </Section>
    </>
  );
}

function AscentFramework() {
  return (
    <>
      <Block small>
        <h2>The Ascent Framework</h2>
        <p>
          Our proven process that transforms the complex, time-consuming web
          development journey into a clear, predictable, and collaborative
          experience to ensure results and visible impact for your business.
        </p>
      </Block>
      <Block small>
        <h3>Phase 1: Discovery & Strategic Foundation</h3>
        <p>
          Just having a pretty website doesn't mean you'll make money. We need
          to attract, engage and convert your ideal customers, and we keep that
          in mind throughout the entire process.
          <br />
          <br />
          That is why we invest more time initially, we start with a discovery
          meeting to establish a deeper understanding of your business
          objectives, target audience and competitive landscape.
          <br />
          <br />
          This allows us to do our own homework and identify website objectives,
          competitor insights and key performance indicators we can track to
          then create a detailed project roadmap (strategy).
        </p>
      </Block>
      <Block small>
        <h3>Phase 2: User Experience Planning, & Architecture</h3>
        <p>
          With a solid strategic foundation in place, this phase focuses on
          planning the user experience. This includes creating detailed user
          personas representing the target audience and user journey maps
          illustrating their interactions with the website. The development of
          detailed user flows will map out the navigation pathways, and a
          comprehensive website sitemap will define the site's structure.
          Wireframes will focus on optimizing the user journey for conversions
          and desired outcomes. Finally, a content strategy plan and information
          architecture will be established to ensure the website's content is
          well-organized and effectively communicates the client's message.
        </p>
      </Block>
      <Block small>
        <h3>Phase 3: Elegant Design & Branding</h3>
        <p>
          With structure established, this phase brings the visual identity to
          life with a focus on creating user-centric designs that reflect the
          client's brand, starting with wireframes and moving to interactive
          prototypes. Multiple feedback rounds refine the design for final
          approval.
        </p>
      </Block>
      <Block small>
        <h3>Phase 4: Development & Technical Implementation</h3>
        <p>
          This phase transforms designs into functional realities, with a focus
          on code optimization, robust back-end systems, and deployment to
          maintain a high level of performance. A crucial aspect of this stage
          is ensuring the website adapts seamlessly to different device sizes,
          browsers, and interactions. Optimized performance ensures the website
          remains fast and responsive across all devices.
        </p>
      </Block>
      <Block small>
        <h3>Phase 5: Rigorous Quality Assurance & Testing</h3>
        <p>
          Before launch, the website undergoes thorough testing to ensure a
          flawless user experience. Comprehensive functional testing will verify
          that all features and functionalities work as intended across various
          devices and browsers. Usability testing, ideally involving
          representative users from the target audience, will identify any
          potential pain points or areas for improvement. Performance and
          security audits will ensure the website is stable, secure, and
          performs optimally.
        </p>
      </Block>
      <Block small>
        <h3>Phase 6: Seamless Launch & Deployment</h3>
        <p>
          This phase involves the careful deployment of the fully tested website
          to the live server. A detailed website launch process will be followed
          to minimize any potential disruptions. Post-launch monitoring will be
          implemented to identify and resolve any immediate issues that may
          arise. Comprehensive client training will be provided on how to manage
          their website content and utilize the CMS effectively.
        </p>
      </Block>
      <Block small>
        <h3>Phase 7: Continuous Growth & Support</h3>
        <p>
          The relationship extends beyond the initial launch in this ongoing
          phase. Continuous website maintenance and security updates will ensure
          the website remains protected and performs optimally. Performance
          monitoring will track key metrics, and ongoing optimization efforts
          will aim to improve results over time. Optional services for SEO,
          content marketing, and conversion rate optimization can be offered to
          further support the client's business growth.
        </p>
      </Block>
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
