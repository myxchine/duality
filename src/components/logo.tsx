import { siteConfig } from "@/siteConfig";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="tracking-[0rem] leading-[1.2rem]  text-xl md:text-2xl font-accent font-medium  text-foreground flex flex-col gap-[1px] md:gap-1 pt-[4px]"
    >
      Michael
      Santos
      <span className="font-sans text-[10px] md:text-[11px] font-light uppercase tracking-[0.25rem]">Web Solutions</span>
    </Link>
  );
}
