import Blob from "./blob";
import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="w-full full-screen fixed top-0 left-0 bg-white flex flex-col items-center justify-center overflow-hidden">
      <Content />
      <Blob />
    </div>
  );
}

function Content() {
  return (
    <>
      <div className="flex flex-col max-w-4xl mx-auto gap-4 p-8 pb-24 md:pb-32 full-screen justify-center ">
        <div className="flex flex-col  ">
          <p className="font-custom text-2xl md:text-3xl uppercase">
            Michael Dos Santos
          </p>
          <h1>Designer & Developer</h1>
        </div>

        <p className="text-balance max-w-md font-mono">
          I specialise in <strong> creative solutions</strong> combined with the{" "}
          <strong> technical skills </strong> to design, build and implement
          them.
        </p>
        <div className="flex flex-row w-full gap-4 ">
          <Button type={1} href="/clients">
            My Clients
          </Button>
          <Button type={2} href="/contact">
            Contact Me
          </Button>
        </div>
      </div>
    </>
  );
}
