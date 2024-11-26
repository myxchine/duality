"use client";
import { useActionState, useState, useEffect } from "react";
import { newContact } from "@/server/db/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Form({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const router = useRouter();
  const [status, submit, isPending] = useActionState(newContact, null);
  const [formData, setFormData] = useState({
    name: searchParams.name || "",
    email: searchParams.email || "",
    message: searchParams.message || "",
  });

  useEffect(() => {
    if (status) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Form submitted successfully");

      router.replace("/contact", { scroll: false });
    }
  }, [status, router]);

  function updateParams(param: string, value: string) {
    const newParams = { ...searchParams, [param]: value };
    router.replace(`/contact?${new URLSearchParams(newParams)}`, {
      scroll: false,
    });
  }

  return (
    <form
      className="flex flex-col gap-4 mt-4  w-full   max-w-xl"
      action={submit}
    >
      <Inputs
        formData={formData}
        setFormData={setFormData}
        updateParams={updateParams}
      />

      <button
        type="submit"
        className={`bg-accent font-mono uppercase font-semibold text-background  border rounded border-accent hover:bg-background hover:text-accent  p-2 text-center h-12 px-4 w-full ${
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
          "Submit >"
        )}
      </button>
    </form>
  );
}

function Inputs({
  formData,
  setFormData,
  updateParams,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  updateParams: (param: string, value: string) => void;
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="flex-1 p-2  border border-foreground/60 bg-background w-full text-foreground placeholder:text-foreground/60 rounded"
        required
        value={formData.name}
        onBlur={(e) => updateParams("name", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="flex-1 p-2  border border-foreground/60 bg-background w-full text-foreground placeholder:text-foreground/60 rounded"
        required
        value={formData.email}
        onBlur={(e) => updateParams("email", e.target.value)}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />

      <textarea
        name="message"
        placeholder="Tell me about yourself and what you're looking for."
        className=" p-2  border border-foreground/60 bg-background w-full text-foreground h-[150px] placeholder:text-foreground/60 rounded"
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
