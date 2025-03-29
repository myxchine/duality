import Mobile from "./mobile";
import Desktop from "./desktop";
export default function Header() {
  return (
    <header className="w-full sticky top-0 z-[1000000] bg-grey/20 backdrop-blur-md ">
      <div className="py-3 px-4 md:p-6 md:py-4 max-w-(--site-width) mx-auto w-full">
        <Mobile />
        <Desktop />
      </div>
    </header>
  );
}
