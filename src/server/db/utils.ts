"use server";

import { db } from ".";
import { contacts, mailList } from "./schema";
import sendEmail from "../email";

export async function newContact(currentState: any, formData: FormData) {
  const name = formData.get("name")?.toString();
  const surname = formData.get("surname")?.toString();
  const message = formData.get("message")?.toString();
  const email = formData.get("email")?.toString();

  // Ensure all form data fields are available and valid
  if (
    typeof name !== "string" ||
    typeof surname !== "string" ||
    typeof message !== "string" ||
    typeof email !== "string"
  ) {
    return "Invalid form data";
  }

  try {
    await db.insert(contacts).values({
      name: name,
      surname: surname,
      email: email,
      message: message,
    });
    await sendEmail(name, surname, message, email);

    return "Form submitted successfully!";
  } catch (error) {
    console.error(error);
    return "Error submitting form, please try again.";
  }
}

export async function newMailMember(currentState: any, formData: FormData) {
  const email = formData.get("email")?.toString();

  // Ensure all form data fields are available and valid
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
