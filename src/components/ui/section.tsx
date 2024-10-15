export default function Section({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col p-4 max-w-6xl mx-auto md:py-8 gap-8 md:gap-16">
      {children}
    </div>
  );
}
