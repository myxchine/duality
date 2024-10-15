"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navItems from "@/data/menu_nav.json";

export default function NavComponent(props: any) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`font-geistMono uppercase ${
            pathname === item.href ? "text-accent" : ""
          } hover:underline`}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href={"/contact"}
        className="text-background bg-accent w-fit p-2 px-4 font-geistMono uppercase  border border-accent hover:bg-accent/80 hidden"
      >
        Contact Us
      </Link>
    </nav>
  );
}
