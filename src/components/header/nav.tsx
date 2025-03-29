"use client";
import { mainMenu } from "@/siteConfig";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
export default function Nav({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={className}>
      {mainMenu.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          scroll={false}
          className={`rounded-lg  text-base md:text-sm hover:text-black  w-fit items-center text-center ${
            pathname === item.href ? "text-black" : "text-black/50"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
