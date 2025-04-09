import { Block, Row, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { Faqs } from "@/components/faqs";
import System from "./system";
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
          <Block>
            <h2>More than just a website</h2>
            <p className="max-w-2xl">
              Stop wasting money on pretty websites that don't perform. After
              years refining our proven process, the Ascent Framework, we
              guarantee your website attracts and converts your ideal customers.
            </p>

            <a
              href="#the-ascent-framework"
              className="secondary-button w-fit mt-2"
            >
              The Ascent Framework{" "}
              <span className="font-sans font-semibold text-base tracking-normal">
                {"->"}
              </span>
            </a>
          </Block>
        </Row>
        <Row>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-full">
            <div className="bg-black/5 rounded-4xl p-8 md:p-12 flex flex-col">
              <Block centered small>
                <h2>{t("features.guarantee.title")}</h2>
                <p>{t("features.guarantee.description")}</p>
              </Block>
            </div>
            <div className="bg-black/5 rounded-4xl p-8 md:p-12 flex flex-col">
              <Block centered small>
                <h2>Zero to Live in 21 days</h2>
                <p>
                  Our effeciency & expertise allows us to take all the work out
                  of your hands and deliver a fully functional, responsive,
                  performant and good looking website in 3 weeks or less.
                </p>
              </Block>
            </div>

            <div className="bg-black/5 rounded-4xl p-8 md:p-12 flex flex-col">
              <Block centered small>
                <h2>Results over everything</h2>
                <p>
                  We build strategic digital platforms focused on measurable
                  growth in your business. Our process aims to create a
                  frictionless path for your ideal customers to understand your
                  value, build trust, and easily connect.
                </p>
              </Block>
            </div>

            <div className="bg-black/5 rounded-4xl p-8 md:p-12 flex flex-col">
              <Block centered small>
                <h2>No compromises</h2>
                <p>
                  With us, your wish is our command, any feature you need for
                  your website is available. This will be explored in our intial
                  discovery call as we collaborate to identify what is neede,
                  and what is not.
                </p>
              </Block>
            </div>
          </div>
        </Row>

        <Row>
          <Block centered small>
            <h2>Techinal Features</h2>
            <p>
              We have spent years optimising online experiences and developing
              the skills to implement the most important features especially for
              businesses trying to grow online.
            </p>
          </Block>
          <Features />
        </Row>

        <Row padding>
          <AscentFramework />
          <Block centered small>
            <h2>Ready to grow your business online?</h2>
            <Link href="/contact" className="primary-button mt-2">
              Let's Talk{" "}
              <span className="font-sans font-bold text-base tracking-normal mt-2">
                {"->"}
              </span>
            </Link>
          </Block>
        </Row>
      </Section>
    </>
  );
}

import PartnersMarquee from "./marquee";
import { Features } from "./features";

async function Hero() {
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

function AscentFramework() {
  const phases = [
    {
      title: "Phase 1: Charting the Course",
      description:
        "We begin by deeply understanding your Lisbon business, audience, and goals to define a clear strategy through a discovery meeting.",
    },
    {
      title: "Phase 2: Blueprinting the Experience",
      description:
        "Next, we map out the user journey and site structure, designing an intuitive flow that guides visitors effortlessly towards conversion.",
    },
    {
      title: "Phase 3: Designing Your Digital Presence",
      description:
        "We craft a stunning, bespoke design that embodies your brand's quality and resonates powerfully with your ideal customers.",
    },
    {
      title: "Phase 4: Building with Precision",
      description:
        "We bring the vision to life with modern + scalable technologies, ensuring a fast, responsive, and future-proof website.",
    },
    {
      title: "Phase 5: Ensuring Flawless Quality",
      description:
        "Before launch, we rigorously test every element across all devices and browsers, guaranteeing a seamless and professional user experience.",
    },
    {
      title: "Phase 6: Launching for Impact",
      description:
        "We handle the technical complexities of a smooth launch optimised for performance and security, now live on the internet for your business to benefit from.",
    },
    {
      title: "Phase 7: Partnering for Growth",
      description:
        "Our journey continues post-launch with ongoing support, maintenance, and data-driven insights to ensure sustained growth and results.",
    },
  ];

  return (
    <>
      <Block small centered>
        <h2 id="the-ascent-framework">The Ascent Framework</h2>
        <p className="max-w-3xl">
          Our proven 7-phase process transforms the complex web development
          journey into a clear, collaborative experience, ensuring predictable
          results and visible impact for your Lisbon business.
        </p>
      </Block>

      <div className="flex flex-col  gap-6 md:gap-8 mt-8 max-w-3xl mx-auto">
        {phases.map((phase, index) => (
          <div
            key={index}
            className=" flex flex-col items-center gap-2 md:gap-4 justify-center text-center"
          >
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>

            <div className="w-0.5 h-12 bg-black rounded mt-6" />
          </div>
        ))}
      </div>
    </>
  );
}
/*
# The Lisbon Ascent Framework: Premium Web Design & Development for Lisbon's Leading Businesses

## Introduction: Crafting Digital Excellence in Lisbon

Welcome to the **Lisbon Ascent Framework**, the standardized, premium web design and development process by Michael Santos Web Solutions Agency. We partner exclusively with ambitious businesses in Lisbon seeking not just a website, but a high-performance digital asset that drives growth and reflects their market leadership.

This framework is our commitment to transparency, strategic partnership, and exceptional results. It transforms the often complex web development journey into a clear, predictable, and collaborative experience. By productizing our process, we ensure consistent quality, efficiency, and scalability, allowing us to deliver unparalleled value to every client.

## Our Philosophy: The Pillars of Premium

Our framework is built upon core principles that differentiate our approach:

1.  **Strategic Foundation:** We begin with a deep understanding of your business, market, and objectives. Every decision is rooted in strategy to ensure your website delivers measurable ROI.
2.  **User-Centricity:** We design for your target audience, creating intuitive, engaging experiences that convert visitors into loyal customers.
3.  **Bespoke Quality:** We craft unique, high-fidelity designs and employ meticulous development practices, reflecting the premium nature of your brand.
4.  **Measurable Results:** We define clear KPIs from the outset and focus on building a digital platform engineered for performance and growth.
5.  **Transparent Partnership:** We believe in clear communication, defined deliverables, and a collaborative journey with predictable milestones.
6.  **Lisbon Market Acumen:** We leverage our understanding of the Lisbon business landscape to create solutions that resonate locally while adhering to global best practices.

## The Framework: A 7-Phase Journey to Digital Leadership

Our process is structured into seven distinct phases, ensuring a comprehensive and methodical approach from concept to continuous growth.

---

### Phase 1: Strategic Foundation & Discovery

*   **Goal:** To establish a deep understanding of your business objectives, target audience, competitive landscape, and project goals, forming the strategic bedrock for success.
*   **Key Activities:**
    *   In-depth Client Discovery Meeting (Business goals, brand values, target audience personas, KPIs).
    *   Lisbon Market & Competitor Analysis.
    *   Technical & Content Audit (if applicable).
    *   Definition of Unique Value Proposition (UVP).
    *   Project Scope Confirmation & Strategic Brief Development.
*   **Key Deliverables:** Detailed Project Roadmap, Defined Business & Website Objectives, Agreed KPIs, Competitor Insights, Documented Scope.
*   **Why it's Premium:** We invest significant time upfront in strategy, ensuring the final product is perfectly aligned with business goals, unlike agencies that jump straight to design.

---

### Phase 2: Experience Planning & Architecture (UX)

*   **Goal:** To meticulously plan the website's structure, user navigation, and content hierarchy for an optimal and intuitive user experience.
*   **Key Activities:**
    *   User Journey Mapping & Flow Analysis.
    *   Development of a comprehensive Sitemap.
    *   Wireframing of key pages and user interfaces (focus on structure, flow, conversion paths).
    *   Content Strategy Outline & Information Architecture (IA).
*   **Key Deliverables:** Approved Sitemap, Detailed Wireframes, User Flow Diagrams, Content Strategy Outline.
*   **Why it's Premium:** We prioritize function and user flow *before* visual design, ensuring the site is strategically sound and easy to navigate.

---

### Phase 3: Elegant Design & Brand Integration (UI)

*   **Goal:** To translate the strategic blueprint and wireframes into a visually stunning, brand-aligned, and user-friendly interface that reflects your premium positioning.
*   **Key Activities:**
    *   Brand Integration Workshop (if needed).
    *   Development of a High-Fidelity Design System (colours, typography, UI components).
    *   Creation of Bespoke Mockups for key pages based on approved wireframes.
    *   Interactive Prototyping for critical user flows (optional, based on scope).
    *   Focus on Accessibility Standards (WCAG).
    *   Structured Design Presentation & Refinement Cycles.
*   **Key Deliverables:** Approved High-Fidelity Design Mockups, UI Style Guide / Design System Components.
*   **Why it's Premium:** We create custom, high-end designs coupled with robust design systems for consistency and future scalability, avoiding generic templates.

---

### Phase 4: Precision Development & Optimization

*   **Goal:** To bring the approved designs to life with clean, efficient, and standards-compliant code, ensuring optimal performance, security, and responsiveness across all devices.
*   **Key Activities:**
    *   Setup of Development Environments (Dev, Staging, Production).
    *   Pixel-Perfect, Responsive Front-End Development (HTML, CSS, JavaScript).
    *   Robust Back-End Development & CMS Integration (e.g., WordPress, Headless CMS, specific platforms).
    *   API Integrations (if required).
    *   Content Population & Formatting.
    *   Performance Optimization (Speed, Core Web Vitals).
    *   Basic On-Page SEO Implementation.
*   **Key Deliverables:** Functional Website on a Staging Server, Integrated CMS.
*   **Why it's Premium:** Meticulous coding standards, focus on performance optimization from the ground up, and use of appropriate modern technologies ensure a technically superior product.

---

### Phase 5: Rigorous Quality Assurance & Testing

*   **Goal:** To thoroughly test every aspect of the website, ensuring it is bug-free, performs flawlessly across environments, and delivers a seamless user experience before launch.
*   **Key Activities:**
    *   Comprehensive Functional Testing.
    *   Cross-Browser & Cross-Device Compatibility Testing.
    *   Usability Testing (Internal or with client representatives).
    *   Performance & Load Testing.
    *   Security Audits & Vulnerability Checks.
    *   Accessibility Compliance Checks.
    *   Content & Link Verification.
*   **Key Deliverables:** QA Test Reports, Resolved Issues List, Final Pre-Launch Checklist Verification.
*   **Why it's Premium:** Our multi-layered QA process goes beyond basic checks, ensuring a polished, reliable, and professional final product.

---

### Phase 6: Seamless Launch & Handoff

*   **Goal:** To deploy the website to the live environment smoothly and efficiently, followed by comprehensive training and documentation for the client team.
*   **Key Activities:**
    *   Final Pre-Launch Checks & Client Sign-off.
    *   Server Configuration & Deployment to Live Environment.
    *   DNS Propagation Management & SSL Certificate Implementation.
    *   Post-Launch Monitoring & Initial Troubleshooting.
    *   Analytics & Tracking Setup Verification.
    *   Client Training Session(s) on CMS Usage & Content Management.
    *   Delivery of Final Documentation.
*   **Key Deliverables:** Live Website, CMS Training Session(s), Project Documentation Package.
*   **Why it's Premium:** We manage the technical complexities of launch and provide thorough training, empowering clients to manage their new asset effectively.

---

### Phase 7: Growth & Partnership

*   **Goal:** To ensure the long-term health, security, and performance of the website, and partner with the client for continuous improvement and growth based on data.
*   **Key Activities:**
    *   Ongoing Website Maintenance & Security Updates (via optional support plan).
    *   Performance Monitoring & Reporting (KPI tracking).
    *   Proactive Recommendations for Enhancements.
    *   Optional Strategic Services:
        *   Advanced SEO & Content Marketing.
        *   Conversion Rate Optimization (CRO).
        *   New Feature Development.
*   **Key Deliverables (Ongoing):** Regular Maintenance Logs, Performance Reports, Strategic Recommendations.
*   **Why it's Premium:** We position ourselves as long-term partners invested in our clients' ongoing digital success, not just project vendors.

---

## The Premium Difference: Why Choose This Framework?

Our Lisbon Ascent Framework stands out by offering:

*   **Deep Strategic Insight:** We don't just build websites; we build digital strategies.
*   **Uncompromising Quality:** From design aesthetics to code robustness, excellence is standard.
*   **User-Obsessed Design:** We create experiences your customers will love.
*   **Results-Driven Approach:** We focus on metrics that matter to your bottom line.
*   **Predictability & Transparency:** A clear process means no surprises.
*   **Lisbon Market Focus:** Tailored insights for businesses succeeding in Lisbon.
*   **Long-Term Partnership:** We're here to support your growth beyond launch.

## Designed for Lisbon, Built for Scale

While tailored to the nuances of the Lisbon business environment, this framework is inherently scalable. By standardizing our process, deliverables, and communication protocols, we ensure every client receives the same high level of strategic thinking, creative excellence, and technical execution, regardless of project size. This "factory line" consistency *is* our premium product.

## Client Communication & Collaboration

Transparency is key. Throughout the Lisbon Ascent Framework, you can expect:

*   **Clear Kickoff:** Setting expectations from Day 1.
*   **Defined Touchpoints:** Formal review and approval stages at the end of key phases.
*   **Regular Updates:** Proactive communication on progress (e.g., weekly status reports).
*   **Structured Feedback:** Efficient systems for gathering and incorporating your input.
*   **Dedicated Project Management:** A single point of contact focused on your project's success.

We ensure you are informed and involved at critical junctures, making the process a true partnership.

## Conclusion: Your Ascent Starts Here

The Lisbon Ascent Framework provides a proven path to digital excellence for discerning businesses in Lisbon. It's more than a process; it's our promise of a strategic, collaborative, and results-oriented journey culminating in a powerful digital asset that elevates your brand and accelerates your growth.

Partner with Michael Santos Web Solutions and experience the difference a premium, structured approach makes.

*/

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
