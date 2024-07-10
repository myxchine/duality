import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="flex flex-row items-center top-0 left-0 w-full sticky p-3 px-5 w-full bg-background md:py-5">
      <section className="w-full md:hidden block">
        <MobileMenu />
      </section>
      <section className="w-full md:block hidden">
        <Menu />
      </section>
    </header>
  );
}
