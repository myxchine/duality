import Link from "next/link";

export default function Button({
  children,
  href,
  type,
}: Readonly<{ children: React.ReactNode; href: string; type: number }>) {
  const buttonType = [
    "bg-foreground border-foreground text-background hover:bg-background hover:text-foreground",
    "bg-background border-foreground text-foreground hover:bg-foreground hover:text-background",
    "bg-accent bg-accent text-background hover:bg-background hover:text-accent",
  ];

  return (
    <Link
      href={href}
      className={`${
        buttonType[type - 1]
      } w-fit px-4 py-2  mt-2 border font-geistMono uppercase flex flex-col items-center justify-center `}
    >
      {children}
    </Link>
  );
}
