import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Header() {
  return (
    <header className="flex flex-col w-full sticky  top-0  z-[10000000]    p-3 md:p-5  bg-transparent">
      <div className="border-none border-foreground md:p-3 md:py-1 z-10 rounded-2xl overflow-hidden    w-full flex flex-row items-center justify-between bg-foreground/10 text-background  max-w-[var(--headerwidth)] mx-auto backdrop-blur-xl">
        <Mobile />
        <Desktop />
      </div>
      <div className="topdowngradient absolute top-0 left-0 w-full h-full" />
    </header>
  );
}

//linear-gradient(180deg, #dbdbd8 0%, #e4e4e0 100%)
