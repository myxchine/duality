"use server";
import sendEmail from "@/server/email";

export async function newContact(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string"
  ) {
    return false;
  }

  try {
    await sendEmail(name, message, email);
    return true;
  } catch (error) {
    return false;
  }
}
