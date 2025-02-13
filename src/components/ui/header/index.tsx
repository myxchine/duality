import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Header() {
  return (
    <header className="flex flex-col w-full sticky  top-0  z-[10000000]    p-3 md:p-5  bg-transparent  max-w-[var(--headerwidth)] mx-auto">
      <div className="border-none border-foreground md:p-3  z-10 rounded-2xl overflow-hidden    w-full flex flex-row items-center justify-between bg-foreground/10   backdrop-blur-xl">
        <Mobile />
        <Desktop />
      </div>
      <div className="topdowngradient absolute top-0 left-0 w-full h-full" />
    </header>
  );
}
