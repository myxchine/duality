import Nav from "./nav";
import Logo from "@/components/logo";

export default function Menu() {
  return (
    <div className=" md:flex hidden flex-row items-center justify-between  w-full gap-8 bg-transparent">
      <Logo />
      <Nav className="flex flex-row gap-8 w-fit justify-center items-center" />
    </div>
  );
}
