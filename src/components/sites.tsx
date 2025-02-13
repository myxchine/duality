import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Sites({
  sites,
  cols,
  h3,
  lineclamp,
}: {
  sites: Site[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left w-full gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
    >
      {sites.map((site) => (
        <Link
          href={`/sites/${site.slug}`}
          className="rounded-2xl hover:scale-105 transition-transform mb-0 md:mb-6 flex overflow-hidden flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative w-full  bg-background"
          key={site.slug}
        >
          <Image
            src={site.image}
            alt={site.title}
            width={500}
            height={300}
            className="rounded-2xl w-full object-cover aspect-[11/9] md:aspect-[11/9] object-top "
          />

          <div className="flex flex-col gap-2 z-10 absolute bottom-0 left-0 w-full p-2  bottomupgradient2 text-foreground">
            {h3 ? (
              <h3 className="line-clamp-2 ">{site.title} </h3>
            ) : (
              <h2 className="line-clamp-2 text-lg md:text-2xl">{site.title}</h2>
            )}
            <p
              className={
                lineclamp
                  ? "line-clamp-2 normal-case z-10 "
                  : "normal-case line-clamp-2 z-10 "
              }
            >
              {site.excerpt}
            </p>

            <span className="hover:underline ">Learn More {"->"}</span>
          </div>
          <div className="bottomupgradient3 absolute bottom-0 left-0 w-full h-full md:h-[75%]" />
        </Link>
      ))}
    </div>
  );
}

/*



import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Sites({
  sites,
  cols,
  h3,
  lineclamp,
}: {
  sites: Site[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left w-full gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 `}
    >
      {sites.map((site) => (
        <Link
          href={`/sites/${site.slug}`}
          className="  hover:scale-105 transition-transform flex flex-col gap-4 relative rounded-2xl overflow- shadow bg-accent text-background"
          key={site.slug}
        >
          <Image
            src={site.image}
            alt={site.title}
            width={500}
            height={300}
            className="rounded-2xl w-full object-cover aspect-[11/9] md:aspect-[11/9] object-top "
          />

          <div className=" z-10 w-full flex flex-col gap-2 md:gap-4 absolute bottom-0 left-0 p-4 md:p-6">
            {h3 ? (
              <h3 className="line-clamp-2 z-[10000] ">{site.title} </h3>
            ) : (
              <h2 className="line-clamp-2 z-[10000] ">{site.title}</h2>
            )}
            <p
              className={
                lineclamp
                  ? "line-clamp-2 normal-case z-10 "
                  : "normal-case line-clamp-4 z-10 "
              }
            >
              {site.excerpt}
            </p>
          </div>
          <div className="bottomupgradient3 absolute bottom-0 left-0 w-full h-full" />
        </Link>
      ))}
    </div>
  );
}

import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Sites({
  sites,
  cols,
  h3,
  lineclamp,
}: {
  sites: Site[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left w-full gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 `}
    >
      {sites.map((site) => (
        <Link
          href={`/sites/${site.slug}`}
          className="mb-[3rem]  hover:scale-105 transition-transform flex flex-col gap-4 relative rounded-2xl overflow- shadow bg-accent text-accent"
          key={site.slug}
        >
          <Image
            src={site.image}
            alt={site.title}
            width={500}
            height={300}
            className="rounded-2xl w-full object-cover aspect-[16/9] md:aspect-[16/9] object-top "
          />

          <div className=" z-10 w-full flex flex-col gap-2 md:gap-4 absolute bottom-[-3rem] left-0 px-4 md:px-6">
            <div className="highlight-div">
              {h3 ? (
                <h3 className="line-clamp-2 z-[10000] ">{site.title} </h3>
              ) : (
                <h2 className="line-clamp-2 z-[10000] ">{site.title}</h2>
              )}
              <p
                className={
                  lineclamp
                    ? "line-clamp-2 normal-case z-10 "
                    : "normal-case line-clamp-4 z-10 "
                }
              >
                {site.excerpt}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}


import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Sites({
  sites,
  cols,
  h3,
  lineclamp,
}: {
  sites: Site[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left w-full gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 `}
    >
      {sites.map((site) => (
        <Link
          href={`/sites/${site.slug}`}
          className=" hover:scale-105 transition-transform flex flex-col gap-4 relative rounded-2xl overflow-hidden shadow bg-background text-black"
          key={site.slug}
        >
          <Image
            src={site.image}
            alt={site.title}
            width={500}
            height={300}
            className=" w-full object-cover aspect-[14/9] md:aspect-[14/9] object-top mb-[50px]"
          />

          <div className=" z-10 w-full flex flex-col gap-2 md:gap-4 absolute bottom-0 left-0 p-4 md:p-5">
            {h3 ? (
              <h3 className="line-clamp-2 z-[10000]">
                {site.title}{" "}
                <span className="font-sans text-xl font-black"> {"→"}</span>
              </h3>
            ) : (
              <h2 className="line-clamp-2 z-[10000]">
                {site.title} <span className="font-sans"> {"→"}</span>
              </h2>
            )}
            <p
              className={
                lineclamp
                  ? "line-clamp-2 normal-case z-10"
                  : "normal-case line-clamp-2 z-10"
              }
            >
              {site.excerpt}
            </p>
          </div>

          <div className="masked-div absolute bottom-0 left-0 w-full h-[60%]" />
          <div className="bottomupgradient2 z-[10000000] absolute bottom-[30px] left-0 w-full h-[60%]" />
        </Link>
      ))}
    </div>
  );
}

import { Button, Row } from "@/components/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Sites({
  sites,
  cols,
  h3,
  lineclamp,
}: {
  sites: Site[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left w-full gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 `}
    >
      {sites.map((site) => (
        <Link
          href={`/sites/${site.slug}`}
          className=" hover:scale-105 transition-transform flex flex-col gap-4 relative rounded-2xl overflow-hidden shadow bg-black text-white"
          key={site.slug}
        >
          <Image
            src={site.image}
            alt={site.title}
            width={500}
            height={300}
            className="bg-black w-full object-cover aspect-[14/9] md:aspect-[14/9] object-top mb-[50px]"
          />

          <div className=" z-10 w-full flex flex-col gap-2 md:gap-4 absolute bottom-0 left-0 p-4 md:p-5">
            {h3 ? (
              <h3 className="line-clamp-2 z-[10000]">
                {site.title}{" "}
                <span className="font-sans text-xl font-black"> {"→"}</span>
              </h3>
            ) : (
              <h2 className="line-clamp-2 z-[10000]">
                {site.title} <span className="font-sans"> {"→"}</span>
              </h2>
            )}
            <p
              className={
                lineclamp
                  ? "line-clamp-2 normal-case z-10"
                  : "normal-case line-clamp-2 z-10"
              }
            >
              {site.excerpt}
            </p>
          </div>

          <div className="masked-div absolute bottom-0 left-0 w-full h-[60%]" />
          <div className="bottomupgradient2 z-[10000000] absolute bottom-[10px] left-0 w-full h-[100%]" />
        </Link>
      ))}
    </div>
  );
}

*/
