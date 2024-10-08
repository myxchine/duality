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
        href={"/clients"}
        className={`  ${
          pathname === "/clients" ? "text-foreground" : ""
        } hover:underline`}
      >
        My Clients
      </Link>
      <Link
        href={"/blog"}
        className={`  ${
          pathname === "/blog" ? "text-foreground" : ""
        } hover:underline`}
      >
        Blog
      </Link>

      <Link href={"/contact"}>
        <button
          className={`text-background w-fit p-2 px-4 rounded border border-foreground hover:bg-background hover:text-foreground hover:border-foreground ${
            pathname === "/contact"
              ? "bg-foreground text-background border-foreground"
              : "bg-foreground text-background border-foreground"
          }`}
        >
          Contact
        </button>
      </Link>
    </nav>
  );
}
