"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav(props: any) {
  const pathname = usePathname();
  return (
    <nav {...props}>
      <Link
        href={"/"}
        className={`${
          pathname === "/" ? "text-foreground" : ""
        } hover:underline`}
      >
        Home
      </Link>
      <Link
        href={"/portfolio"}
        className={`  ${
          pathname === "/tours" ? "text-foreground" : ""
        } hover:underline`}
      >
        Portfolio
      </Link>

      <Link href={"/calculate-price"}>
        <button
          className={`text-background w-fit p-2 px-4 rounded border border-foreground hover:bg-background hover:text-foreground hover:border-foreground ${
            pathname === "/reserve"
              ? "bg-foreground text-background border-foreground"
              : "bg-foreground text-background border-foreground"
          }`}
        >
          Calculate Now
        </button>
      </Link>
    </nav>
  );
}
