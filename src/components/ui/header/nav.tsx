"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Articles", href: "/articles" },
  { name: "Sites", href: "/sites" },
  { name: "About", href: "/articles/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

export default function Nav({
  className,
  first,
  second,
}: {
  className?: string;
  first?: boolean;
  second?: boolean;
}) {
  const pathname = usePathname();

  let finalnavigation = navigation;

  if (second === true) {
    finalnavigation = navigation.slice(
      navigation.length -  navigation.length / 2,
      navigation.length
    );
  }

  if (first === true) {
    finalnavigation = navigation.slice(0, navigation.length - navigation.length / 2);
  }

  return (
    <nav className={className}>
      {finalnavigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          scroll={false}
          className={`p-2 px-3 rounded-lg tracking-wider text-xs hover:bg-white/20  w-fit items-center text-center ${
            pathname === item.href ? "bg-white/20" : "bg-transparent"
          }
          
          `}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
