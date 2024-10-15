import MobileMenu from "./mobile";
import Menu from "./desktop";
import AnnouncementBanner from "./announcement";
export default function Header() {
  return (
    <>
      <AnnouncementBanner />
      <header className="flex flex-col items-center w-full sticky top-0 left-0  z-[10000000] bg-foreground text-background">
        <MobileMenu />
        <Menu />
      </header>
    </>
  );
}
