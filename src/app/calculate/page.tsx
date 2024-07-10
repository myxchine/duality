import Form from "./_components/Form";

export default function Calculate({ searchParams }: { searchParams: any }) {
  return (
    <div className="  gap-8 flex flex-col w-full">
      <h1 className="text-6xl md:text-8xl w-full xl:px-0 font-bold text-left text-balance tracking-tighter p-6 pb-0  max-w-6xl mx-auto md:py-12 text-foreground">
        Let's do some math
      </h1>

      <Form searchParams={searchParams} />
    </div>
  );
}
