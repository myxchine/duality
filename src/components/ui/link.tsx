import Link from "next/link";

export default function LinkButtom({
  children,
  href,
  type,
}: Readonly<{ children: React.ReactNode; href: string; type: number }>) {
  const buttonType = [
    "text-foreground hover:underline",
    "text-accent  hover:underline",
  ];

  return (
    <Link
      href={href}
      className={`${buttonType[type - 1]}   font-geistMono uppercase `}
    >
      {children} {"->"}
    </Link>
  );
}
