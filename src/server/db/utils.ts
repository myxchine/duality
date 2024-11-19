"use server";

import { db } from ".";
import { contacts, mailList } from "./schema";
import sendEmail from "../email";

export async function newContact(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string"
  ) {
    return "Invalid form data";
  }

  try {
    await sendEmail(name, message, email);

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}

export async function newMailMember(currentState: any, formData: FormData) {
  const email = formData.get("email")?.toString();

  if (typeof email !== "string") {
    return "Invalid form data";
  }

  try {
    await db.insert(mailList).values({
      email: email,
    });

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}
