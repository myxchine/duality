import { FacebookIcon, InstagramIcon } from "./icons";
import Link from "next/link";

import socials from "@/data/socials.json";

export default function Social() {
  return (
    <div className="flex flex-row items-center justify-center gap-4  w-full p-4">
      <Link
        href={socials.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="w-8 h-8" />
      </Link>
      <Link
        href={socials.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className="w-8 h-8" />
      </Link>
    </div>
  );
}
