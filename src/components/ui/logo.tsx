import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-boldaccent     flex flex-col items-center justify-center md:py-2 md:px-3"
    >
      <span className="text-base md:text-lg tracking-wider font-accent">Michael Dos Santos</span>
      <span className=" tracking-[0.05rem] text-[9px] md:text-[11px] pb-[4px] md:pb-[5px] leading-[0.8] uppercase ">Designer & Developer</span>
    </Link>
  );
}
