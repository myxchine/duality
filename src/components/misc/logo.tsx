import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className=" text-3xl md:text-4xl  font-accent -mt-1  lowercase tracking-[0.1em]  "
      aria-label="Home"
      title="Home"
    >
      Vesqa
    </Link>
  );
}

export function oldLogo() {
  return (
    <Link
      href="/"
      className=" text-3xl md:text-4xl  font-accent   lowercase -tracking-[0em]  "
      aria-label="Home"
      title="Home"
    >
      Vesqa
    </Link>
  );
}
