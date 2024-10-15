import MobileMenu from "./mobilemenu";
import Menu from "./desktopmenu";
import AnnouncementBanner from "./announcement";
export default function Header() {
  return (
    <header className="flex flex-col items-center w-full   z-[10000000] sticky top-0 left-0 bg-background">
      <MobileMenu />
      <Menu />
    </header>
  );
}
