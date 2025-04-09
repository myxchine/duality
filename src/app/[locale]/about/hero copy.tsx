import { Block } from "@/components/ui";
import Link from "next/link";

export default function Hero() {
  return (
    <Block small centeredmobile>
      <SocialProof />
      <h1 className="max-w-sm md:max-w-none ">
        Generate Organic Customers Online
      </h1>
      <p className="text-base md:text-xl max-w-[330px] md:max-w-none text-inherit ">
        We <strong>design & develop custom world-class websites</strong> that
        are exceptional at <strong>attracting high-value </strong> customers.
      </p>
      <div className="flex flex-row md:flex-row gap-3 md:gap-4 mt-2 w-fit">
        <Link
          href="/sites"
          className="bg-foreground text-background px-6 md:px-8  py-2 md:py-2  rounded-full hover:bg-foreground/80  text-sm md:text-lg "
        >
          See Results
        </Link>
        <Link
          href="/contact"
          className="bg-white   text-foreground px-6 md:px-8  py-2 md:py-2 rounded-full hover:bg-background/60 w-fit text-sm md:text-lg"
        >
          Free Consultation
        </Link>
      </div>
    </Block>
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
