import { Block, Row, Section } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <>
      <Section>
        <Row>
          <Block centered small>
            <h1>About Michael Santos Web Solutions</h1>
            <p>
              We are a web design and development agency based in Lisbon,
              Portugal. We specialize in creating high-quality, user-centric
              websites that prioritise driving business growth and results.
            </p>

            <Link href="/" className="secondary-button w-fit mt-2">
              Our Services
              <span className="font-sans font-semibold text-base tracking-normal">
                {"->"}
              </span>
            </Link>
          </Block>
        </Row>
        <Row>
          <Block centered small>
            <h2>Our confidence is backed by years of evidence</h2>
            <p className="max-w-2xl">
              After working with over 20 businesses over the last 5 years we
              have developed our own proven process, the Ascent Framework, that
              ensures your website attracts and converts your ideal customers.
            </p>

            <Link
              href="/#the-ascent-framework"
              className="secondary-button w-fit mt-2"
            >
              The Ascent Framework{" "}
              <span className="font-sans font-semibold text-base tracking-normal">
                {"->"}
              </span>
            </Link>
          </Block>
        </Row>
      </Section>
    </>
  );
}
