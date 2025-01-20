export default function Section({
  children,
}: Readonly<{ children: React.ReactNode; full?: boolean }>) {
  return (
    <div className={`flex flex-col gap-8 md:my-4 w-full  relative  p-0`}>
      {children}
    </div>
  );
}
