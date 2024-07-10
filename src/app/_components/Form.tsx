"use client";
import { useActionState, useState } from "react";
import { newMailMember } from "@/server/db/utils";

export default function Form() {
  const [status, submit, isPending] = useActionState(newMailMember, null);

  return (
    <form
      className="flex flex-col gap-4 max-w-6xl mx-auto  w-full  max-w-4xl xl:px-0"
      action={submit}
    >
      {status && <p>Submitted successfully!</p>}
      {!status && <p>Subscribe to our newsletter</p>}

      <div className="flex flex-row w-full gap-2">
        <Inputs />

        <button
          type="submit"
          className={`bg-foreground border h-[40px]  border-foreground rounded-md text-background p-2 text-center h-12 px-4 w-fit text-sm  ${
            isPending ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex justify-center items-center space-x-2">
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

function Inputs() {
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-3 h-[40px] rounded-md border border-foreground/60 bg-background w-full text-foreground placeholder:text-foreground/60 text-sm"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </>
  );
}
