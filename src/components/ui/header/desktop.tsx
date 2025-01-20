import Nav from "./nav";
import Logo from "@/components/ui/logo";

export default function Menu() {
  return (
    <div className=" md:flex hidden flex-row items-center justify-between  w-full    gap-8">
      <Nav className="flex flex-row gap-3 w-1/3 justify-start" first={true} />

      <Logo />

      <Nav className="flex flex-row gap-3 w-1/3 justify-end" second={true} />
    </div>
  );
}
