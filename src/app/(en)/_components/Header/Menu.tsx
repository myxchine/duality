import Nav from "./Nav";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function Menu() {
  return (
    <section className="flex flex-row items-center justify-between w-full md:max-w-6xl mx-auto">
      <Link href={"/"} className="w-fit flex flex-row items-start ">
        <Logo />
      </Link>
      <Nav className="hidden md:flex text-foreground flex flex-row items-center justify-center gap-8" />
    </section>
  );
}
