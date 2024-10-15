import Link from "next/link";

export default function AnnouncementBanner() {
  return (
    <section className="w-full  font-custom text-xs md:text-sm bg-foreground text-background text-center p-2 border-b border-white/10 lg:p-3 ">
      <Link href="/about" className="">
        <span className="font-custom">
          Coming to Lisbon // Porto // Algarve {"->"}
        </span>
      </Link>
    </section>
  );
}
