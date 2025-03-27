"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MarqueePartners({
  partners,
  speed = 10,
  direction = "right",
}: {
  partners: { name: string; logo: string; website: string }[];
  speed?: number;
  direction?: "left" | "right";
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    if (!marqueeRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.target.scrollWidth / 2;
        if (newWidth > 0 && Math.abs(newWidth - contentWidth) > 1) {
          setContentWidth(newWidth);
        }
      }
    });

    observer.observe(marqueeRef.current);

    setContentWidth(marqueeRef.current.scrollWidth / 2);

    return () => {
      observer.disconnect();
    };
  }, [partners]);

  const pixelsPerSecond = 25;
  const duration = contentWidth > 0 ? contentWidth / pixelsPerSecond : speed;

  return (
    <div className="overflow-hidden relative w-full mx-auto">
      <motion.div
        ref={marqueeRef}
        className="flex flex-row flex-nowrap gap-8 md:gap-12 items-center"
        animate={
          contentWidth > 0
            ? {
                x:
                  direction === "left"
                    ? [0, -contentWidth]
                    : [-contentWidth, 0],
              }
            : {}
        }
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <a
            key={`${partner.name}-${index}`}
            href={partner.website}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-shrink-0 h-[40px] md:h-[50px] opacity-60 hover:opacity-90 transition-opacity"
          >
            <Image
              src={`/partners${partner.logo}`}
              alt={partner.name}
              width={200}
              height={50}
              className="w-auto h-full object-contain saturate-0 brightness-80"
            />
          </a>
        ))}
      </motion.div>

      <div className="absolute top-0 left-0 left-to-right-gradient h-full w-full z-[100] pointer-events-none" />
    </div>
  );
}
