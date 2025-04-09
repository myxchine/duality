import { Section, Row, Block } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

export default function System() {
  return (
    <Section>
      <Row>
        <Block small centered>
          <h2 className="mt-6 ">
            Scale for <strong>free</strong> in <strong>3 steps</strong>
          </h2>
          <p>
            From <strong>5+ years of experience</strong> we've learnt that you
            need to{" "}
            <strong>attract, create trust, and educate to convert</strong> your
            ideal customers. Start scaling now with a simple yet effective
            system:
          </p>
        </Block>

        <Block centered>
          <ul className="userexperiencelist">
            <li>
              <h3 className="flex flex-row gap-2 items-center justify-center text-nowrap text-start text-xl md:text-2xl">
                <span className="h-fit px-3 pt-[2px]  aspect-square rounded-full bg-black text-white">
                  1
                </span>{" "}
                Build your landing page
              </h3>
              <p>
                After initial research, establisihig your value proposition and
                brand identity, build the page all your{" "}
                <strong>new leads</strong> see first to create a{" "}
                <strong>strong first impression</strong>.
              </p>
            </li>
            <li>
              <h3 className="flex flex-row gap-2 items-center justify-center text-nowrap text-end text-xl md:text-2xl">
                <span className="h-fit pt-1  px-3 aspect-square rounded-full bg-black text-white">
                  2
                </span>{" "}
                Handle all objections
              </h3>
              <p>
                New visitors{" "}
                <strong>don't know who you are or what you do</strong>, so we
                answer every quesion they might have and show proof through{" "}
                <strong>results & testimonials</strong>.
              </p>
            </li>
            <li>
              <h3 className="flex flex-row gap-2 items-center justify-center text-nowrap text-end text-xl md:text-2xl">
                <span className="h-fit pt-1  px-3 aspect-square rounded-full bg-black text-white">
                  3
                </span>{" "}
                Educate and contact
              </h3>
              <p>
                Once the customer is <strong>comfortable</strong> with your
                brand, we can clarify your offer and give them the{" "}
                <strong>opportunity to contact you</strong>.
              </p>
            </li>
          </ul>
        </Block>
        <Block centered>
          <p>
            This is a very <strong>simple breakdown</strong> of what a website
            should provide your business, however there's a lot more we can get
            into to help you <strong>scale online</strong>, take a look at our{" "}
            <strong>free resources</strong> to learn more and scale your
            business.
          </p>

          <Link
            href="/articles"
            className="hover:underline mt-2 text-foreground/80 font-normal"
          >
            Free Resources {"->"}
          </Link>
        </Block>
      </Row>
    </Section>
  );
}
