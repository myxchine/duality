"use server";

interface EmailData {
  sender: {
    name: string;
    email: string;
  };
  to: {
    name: string;
    email: string;
  }[];
  subject: string;
  htmlContent: string;
}

export default async function EmailContactForm(
  customerName: string,
  customerMessage: string,
  customerEmail: string
): Promise<boolean> {
  const confirmationEmailData: EmailData = {
    sender: { name: customerName, email: customerEmail },
    to: [{ name: "Michael", email: "michael.dozzantoz@gmail.com" }],
    subject: `michaelsantos.pt contact from ${customerName}`,
    htmlContent: `<html>
      <head></head>
      <body>
        <p>${customerMessage}</p>
      </body>
    </html>`,
  };

  try {
    console.log("Sending email");
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
      return false;
    }

    console.log("Email sent successfully");

    return true;
  } catch (error) {
    throw new Error(`Failed to send email: ${error}`);
  }
}
