import { Section, Row, Block } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

export default function System() {
  return (
    <Section>
      <Row padding>
        <Block small centered>
          <h2>Why Perfecting User Experience Design is Crucial</h2>
          <p>
            We craft websites that attract, engage, and convert your ideal
            customers—driven by exceptional user experience (UX) design.
          </p>
        </Block>

        <Block centered>
          <ul className="userexperiencelist">
            <li>
              <div className="w-full aspect-[1/1] bg-black rounded-2xl p-8 flex flex-col justify-center items-center mb-4">
                <Image
                  src="/images/4.png"
                  alt="user experience"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-auto"
                />
              </div>

              <h3>1. First Impressions Matter</h3>
              <p>
                Your website is your brand’s first handshake—build trust and
                capture attention right away.
              </p>
            </li>
            <li>
              <div className="w-full aspect-[1/1] bg-black rounded-2xl p-8 flex flex-col justify-center items-center mb-4">
                <Image
                  src="/images/5.png"
                  alt="user experience"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-auto"
                />
              </div>

              <h3>2. Higher Conversions with Smart Design</h3>
              <p>
                Seamless, intuitive design converts visitors into leads and
                customers, driving real business results.
              </p>
            </li>
            <li>
              <div className="w-full aspect-[1/1] bg-black rounded-2xl p-8 flex flex-col justify-center items-center  mb-4">
                <Image
                  src="/images/6.png"
                  alt="user experience"
                  width={300}
                  height={300}
                  priority
                  className="w-full h-auto"
                />
              </div>

              <h3>3. Boost SEO and Stand Out</h3>
              <p>
                User-friendly, fast, and mobile-optimized sites rank higher,
                attract organic traffic, and position your brand as a leader.
              </p>
            </li>
          </ul>

          <Link
            href="/articles/user-experience"
            className="hover:underline mt-6 text-background/80"
          >
            Read full article about UX Design {"->"}
          </Link>
        </Block>
      </Row>
    </Section>
  );
}
