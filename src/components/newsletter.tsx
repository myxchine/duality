"use client";
import { useActionState, useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { newMailMember } from "@/server/db/utils";

export default function Form() {
  const router = useRouter();

  const [status, submit, isPending] = useActionState(newMailMember, null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status) {
      toast.success("Form submitted successfully");
      setEmail("");
      router.refresh();
    }
  }, [status]);

  return (
    <form
      className="flex flex-col gap-6  w-full  max-w-md xl:px-0"
      action={submit}
    >
      <div className="flex flex-col w-full gap-2">
        {status && <h3>Submitted successfully!</h3>}
        {!status && <h3>Subscribe to our newsletter</h3>}

        <p>
          Get access to monthly exclusive offers and information from Michael
          Dos Santos.
        </p>
      </div>

      <div className="flex flex-row w-full gap-2">
        <Inputs email={email} setEmail={setEmail} />

        <button
          type="submit"
          className={`bg-accent border h-[40px]  border-accent  text-background p-2 text-center h-12 px-4 w-fit  hover:bg-accent/80 hover:border-accent/80 font-custom uppercase  ${
            isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex justify-center items-center space-x-2 ">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
              </svg>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}

function Inputs({ email, setEmail }: { email: string; setEmail: any }) {
  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-3 h-[40px]  border border-foreground/20 bg-background w-full text-foreground placeholder:text-foreground/60  font-custom uppercase"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </>
  );
}
