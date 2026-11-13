import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  email: string;
  projectDescription: string;
  budgetRange?: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, projectDescription, budgetRange } = data;

  const emailContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #ea0737; font-size: 28px; margin-bottom: 24px;">New Project Inquiry</h1>

      <div style="background: #f5f5f5; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
        <p style="margin: 0 0 16px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 0 0 16px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${budgetRange ? `<p style="margin: 0;"><strong>Budget Range:</strong> ${budgetRange}</p>` : ""}
      </div>

      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 18px; margin-bottom: 12px;">Project Description:</h2>
        <p style="line-height: 1.6; white-space: pre-wrap;">${projectDescription}</p>
      </div>

      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

      <p style="color: #737373; font-size: 14px; margin: 0;">
        Sent from Blululu contact form
      </p>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: "Blululu <onboarding@resend.dev>", // Update this with your verified domain
      to: process.env.CONTACT_EMAIL || "hello@blululu.in",
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: emailContent,
    });

    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
