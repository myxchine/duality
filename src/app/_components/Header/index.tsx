import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex flex-row items-center absolute top-0 left-0 w-full p-4 px-5 w-full bg-background z-[100000000000] bg-transparent">
      <section className="w-full md:hidden block">
        <MobileMenu />
      </section>
      <section className="w-full md:block hidden">
        <Menu />
      </section>
    </header>
  );
}
