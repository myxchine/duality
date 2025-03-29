"use client";
import { useActionState, useState, useEffect } from "react";
import { newContact } from "@/server/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { SpinnerIcon } from "@/components/icons";

export default function Form() {
  const router = useRouter();

  const [status, submit, isPending] = useActionState(newContact, null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    verifyemail: "",
    message: "",
  });

  useEffect(() => {
    if (status === true) {
      setFormData({
        name: "",
        email: "",
        verifyemail: "",
        message: "",
      });

      toast.success("Contact submitted successfully");
    }

    if (status === false) {
      toast.error("An error occured please try again");
    }
  }, [status, router]);

  return (
    <form
      className="flex flex-col gap-4 mt-4 max-w-5xl   w-full"
      action={submit}
    >
      <Inputs formData={formData} setFormData={setFormData} />

      <button
        type="submit"
        className={`bg-foreground  text-background flex flex-col justify-center items-center  border border-foreground rounded-full  hover:bg-foreground/80 p-2 px-4 text-center h-12  w-full ${
          isPending || formData.verifyemail !== formData.email
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={isPending || formData.verifyemail !== formData.email}
      >
        {isPending ? (
          <SpinnerIcon className="animate-spin size-5 " />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

function Inputs({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder={"Name"}
        className="flex-1 p-2 px-4  border border-foreground/60 bg-secondary w-full text-foreground placeholder:text-foreground/60 rounded-full"
        required
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <input
        type="email"
        name="email"
        placeholder={"Email"}
        className="flex-1 p-2 px-4  border border-foreground/60 bg-secondary w-full text-foreground placeholder:text-foreground/60 rounded-full"
        required
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <input
        type="email"
        name="verifyemail"
        placeholder={"Verify Email"}
        className="flex-1 p-2 px-4  border border-foreground/60 bg-secondary w-full text-foreground placeholder:text-foreground/60 rounded-full"
        required
        value={formData.verifyemail}
        onChange={(e) => {
          setFormData({ ...formData, verifyemail: e.target.value });
        }}
      />

      <textarea
        name="message"
        placeholder={"Message"}
        className=" p-2 px-4  border border-foreground/60 bg-secondary w-full text-foreground h-[150px] max-h-[150px] min-h-[150px] placeholder:text-foreground/60 rounded-3xl"
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
        }}
      />
    </>
  );
}
