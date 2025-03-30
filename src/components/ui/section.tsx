export default function Section({
  children,
  full,
  grey,
  className,
  padding,
}: Readonly<{
  children: React.ReactNode;
  full?: boolean;
  grey?: boolean;
  className?: string;
  padding?: boolean;
}>) {
  return (
    <div
      className={`flex flex-col gap-8 w-full relative ${full ? "" : " md:py-4 "}
      ${padding ? "py-6 md:py-10" : ""}
       ${grey ? "bg-grey pb-4" : "bg-transparent"}  ${className}`}
    >
      {children}
    </div>
  );
}
