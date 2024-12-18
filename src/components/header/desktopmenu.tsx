import Nav from "./nav";
import Link from "next/link";
import { CartIcon, SearchIcon } from "@/components/icons";

export default function Menu() {
  return (
    <div className=" gap-12 w-full  border-b border-foreground  w-full md:block hidden ">
      <div className="flex flex-row items-center justify-between  w-full flex  max-w-6xl mx-auto p-4 px-4 md:px-6 gap-8">
        <Logo />
        <Nav className="text-foreground flex flex-row items-center justify-end gap-8 w-full " />
      </div>
    </div>
  );
}

function Extras() {
  return (
    <div className="w-1/3 flex flex-row items-center justify-end  gap-8">
      <Link href={"/cart"} className="flex items-center justify-center  w-fit">
        <CartIcon stroke="black" className="  h-6 w-6" />
      </Link>
      <Link
        href={"/search"}
        className="flex items-center justify-center  w-fit"
      >
        <SearchIcon stroke="black" className="  h-6 w-6" />
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <Link href={"/"} className="w-full text-3xl md:text-4xl font-custom">
      MICHAEL DOS SANTOS
    </Link>
  );
}
