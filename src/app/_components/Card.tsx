import Link from "next/link";
import Image from "next/image";
export default function Card({
  title,
  description,
  image,
  link,
  linkRef,
}: {
  title: string;
  description: string;
  image: string | null;
  link: string;
  linkRef: string;
}) {
  return (
    <section className="flex flex-col  gap-6  w-full rounded-xl bg-background border border-foreground/20 p-4 text-foreground">
      {image && (
        <Image
          src={image}
          alt="Card Image"
          width={200}
          height={100}
          className="rounded-md w-full h-[200px] object-cover"
        />
      )}
      <h3 className="text-xl font-semibold text-foreground/90">{title}</h3>

      <p className="text-sm text-foreground/60">{description}</p>
      <Link
        href={linkRef}
        className="text-sm text-foreground/90 hover:underline"
      >
        {link} {"->"}
      </Link>
    </section>
  );
}
