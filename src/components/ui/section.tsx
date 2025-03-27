export default function Section({
  children,
  full,
  grey,
  className,
}: Readonly<{
  children: React.ReactNode;
  full?: boolean;
  grey?: boolean;
  className?: string;
}>) {
  return (
    <div
      className={`flex flex-col gap-8 w-full relative ${
        full ? "" : " md:py-4 "
      }
       ${grey ? "bg-grey pb-4" : "bg-transparent"}  ${className}`}
    >
      {children}
    </div>
  );
}
