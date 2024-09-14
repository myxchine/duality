"use client";
import { useActionState, useState } from "react";
import { newContact } from "@/server/db/utils";
import { useRouter } from "next/navigation";

export default function Form({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const [status, submit, isPending] = useActionState(newContact, null);

  return (
    <form
      className="flex flex-col gap-4  mx-auto py-8 w-full p-6 max-w-4xl xl:px-0"
      action={submit}
    >
      <Inputs searchParams={searchParams} />

      <button
        type="submit"
        className={`bg-foreground border border-foreground rounded text-background p-2 text-center h-12 px-4 w-full w-full   ${
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
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 14h4zm2 5.291A7.963 7.963 0 014 12H0c0 4.411 3.589 8 8 8v-4.709z"
              ></path>
            </svg>
          </div>
        ) : (
          "Submit"
        )}
      </button>
      {status && (
        <div className="text-foreground/60 pt-0 text-sm w-full text-center">
          Submitted successfully!
        </div>
      )}
      {!status && (
        <div className="text-foreground/60 pt-0 text-sm w-full text-center">
          Let's get in touch.
        </div>
      )}
    </form>
  );
}

function Inputs({ searchParams }: { searchParams: { [key: string]: string } }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: searchParams.name || "",
    surname: searchParams.surname || "",
    email: searchParams.email || "",
    verifyEmail: "",
    category: searchParams.category || "",
    riders: searchParams.riders || "",
    message: searchParams.message || "",
  });

  function updateParams(param: string, value: string) {
    const newParams = { ...searchParams, [param]: value };

    router.replace(`/contact?${new URLSearchParams(newParams)}`, {
      scroll: false,
    });
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="First Name"
        className="flex-1 p-2 px-4 rounded border border-foreground/20 bg-background w-full text-foreground placeholder:text-foreground/60"
        required
        value={formData.name}
        onBlur={(e) => updateParams("name", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        className="flex-1 p-2 px-4 rounded border border-foreground/20 bg-background w-full text-foreground placeholder:text-foreground/60"
        required
        value={formData.surname}
        onBlur={(e) => updateParams("surname", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, surname: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-2 rounded border border-foreground/20 px-4 bg-background w-full text-foreground placeholder:text-foreground/60"
        required
        value={formData.email}
        onBlur={(e) => updateParams("email", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="email"
        name="verifyEmail"
        placeholder="Verify email"
        className="flex-1 p-2 rounded border border-foreground/20 px-4 bg-background w-full text-foreground placeholder:text-foreground/60"
        required
        value={formData.verifyEmail}
        onChange={(e) => {
          setFormData({ ...formData, verifyEmail: e.target.value });
        }}
      />

      <textarea
        name="message"
        placeholder="Tell us about yourself and what you're looking for."
        className=" p-2 rounded border border-foreground/20 px-4 bg-background w-full text-foreground h-[150px] w-full placeholder:text-foreground/60"
        required
        value={formData.message}
        onBlur={(e) => updateParams("message", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
      />
    </>
  );
}
