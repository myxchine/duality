import { Block, Section, Row } from "@/components/ui";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <Section>
      <Row padding>
        <Block small centered padding>
          <h1>404 | Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link href="/" className="primary-button mt-2">
            Go Home <span className="tracking-normal font-sans">{"->"}</span>
          </Link>
        </Block>
      </Row>
    </Section>
  );
}
