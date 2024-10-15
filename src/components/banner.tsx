import Image from "next/image";
import { Button } from "@/components/ui";

export default function Hero({
  image,
  imageAlt,
  title,
  description,
  button1,
  button1url,
  button2,
  button2url,
}: {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  button1: string;
  button1url: string;
  button2: string;
  button2url: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center relative">
      <div className="bg-black w-full">
        <Image
          src={image}
          alt={imageAlt}
          width={800}
          height={600}
          priority={true}
          className="w-full h-auto object-cover min-h-[500px] max-h-[700px]   opacity-60"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-4 absolute bottom-12 text-white">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="flex gap-4">
          <Button href={button1url} type={1}>
            {button1}
          </Button>
          <Button href={button2url} type={2}>
            {button2}
          </Button>
        </div>
      </div>
    </div>
  );
}
