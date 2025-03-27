import { Row, Block, Section } from "@/components/ui";
import Image from "next/image";
export default function Founder() {
  return (
    <Row>
      <div className="flex flex-col items-center justify-center md:flex-row gap-8">
        <Image
          src="/images/founder.jpg"
          alt="Michael Dos Santos | Founder of Vesqa"
          width={400}
          height={400}
          className="w-full aspect-square rounded-xl object-cover object-center shadow-xl"
        />

        <Block small>
          <h2>Our Founder</h2>
          <p>
            Vesqa was initially started by <strong>Michael Dos Santos</strong>{" "}
            in 2019 with only one client.
          </p>

          <p>
            Since then we have had the pleasure of naturally growing and
            developing our skillset to serve over 20 businesses and help them
            scale online whilst building their brand, all done organically.
          </p>
        </Block>
      </div>
    </Row>
  );
}
