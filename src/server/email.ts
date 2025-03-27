"use server";

import { siteConfig } from "@/siteConfig";

export default async function EmailContactForm(
  customerName: string,
  customerMessage: string,
  customerEmail: string
): Promise<boolean> {
  const confirmationEmailData = {
    sender: { name: customerName, email: "noreply@couturer.com" },
    replyTo: { name: customerName, email: customerEmail },
    to: [{ name: siteConfig.name, email: siteConfig.email }],
    subject: `${siteConfig.name} contact form submission by ${customerName}`,
    htmlContent: `
    <html>
      <head></head>
      <body>
        <p>Email: ${customerEmail}</p>
        <p>${customerMessage}</p>
      </body>
    </html>`,
  };
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.EMAIL_KEY!,
        "content-type": "application/json",
      },
      body: JSON.stringify(confirmationEmailData),
    });
    if (!response.ok) {
      console.log("Error sending email:", response.statusText);
      throw new Error("Error sending email");
    }
    return true;
  } catch (error) {
    console.error(`Failed to send email: ${error}`);
    throw new Error(`Failed to send email: ${error}`);
  }
}
