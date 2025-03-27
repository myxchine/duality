"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./misc/Accordion";
import Link from "next/link";
import { Row } from "@/components/ui";
const faqs = [
  {
    question: "Why is your pricing so high?",
    answer:
      "We only work with the best businesses to not just create websites—we create digital assets that increase your revenue. Premium design, custom development, and strategic execution ensure a high ROI. A cheap website might save money upfront but will cost more in lost conversions and future fixes.",
  },
  {
    question: "How do I know this will deliver results?",
    answer:
      "We use proven UX/UI strategies and a well strucutre scalable site that increase engagement and conversion rates. Case studies and client testimonials showcase the measurable impact of our work. We don’t just design for aesthetics—we design with business objectives in mind. Please visit our results page to see some of our client's custom sites.",
  },
  {
    question: "Will this process take up too much of my time?",
    answer:
      "Our team handles everything with a streamlined, hassle-free process. Dedicated systems keep you updated with minimal involvement needed. We provide clear timelines and structured approvals to avoid delays. You don't need to lay a finger.",
  },
  {
    question: "What if I don’t like the final design?",
    answer:
      "We work closely with you in the discovery phase to ensure alignment from the start. Multiple revision rounds ensure you’re 100% satisfied before launch. You get access to prototypes and mockups before development begins.",
  },
  {
    question: "How do I know this won’t become outdated?",
    answer:
      "We build for scalability and future-proofing with the latest technologies. Regular updates and optimizations ensure your site remains modern and competitive. We follow industry best practices to keep your digital presence ahead of trends.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "We offer post-launch support, maintenance, and performance optimization based on your selected plan (see on pricing page). Optional ongoing marketing and SEO strategies to drive traffic and conversions (see on pricing page).",
  },
];

export function Faqs() {
  return (
    <Row>
      <section aria-labelledby="faq-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
          <div className="col-span-full sm:col-span-6 flex flex-col gap-4">
            <h2>Frequently Asked Questions</h2>
            <p>
              Have any doubts about starting your online scaling journey? We're
              here to help with some common questions. Can’t find the answer
              you’re looking for? Don’t hesitate to contact us directly, we are
              here to help.
            </p>

            <Link href="/contact" className="button-1">
              Contact Us
            </Link>
          </div>
          <div className="col-span-full mt-6 lg:col-span-6 lg:mt-0">
            <Accordion type="multiple" className="mx-auto">
              {faqs.map((item) => (
                <AccordionItem
                  value={item.question}
                  key={item.question}
                  className="py-3 first:pb-3 first:pt-0"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground ">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Row>
  );
}
