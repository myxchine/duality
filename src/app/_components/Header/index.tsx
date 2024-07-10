import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex flex-row items-center top-0 left-0 w-full sticky p-4 px-5 w-full bg-background/90 md:py-8">
      <section className="w-full md:hidden block">
        <MobileMenu />
      </section>
      <section className="w-full md:block hidden">
        <Menu />
      </section>
    </header>
  );
}
