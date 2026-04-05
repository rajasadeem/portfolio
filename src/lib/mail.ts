import nodemailer from "nodemailer";

interface AttachmentPayload {
  filename: string;
  content: Buffer;
  contentType: string;
}

interface ContactMailPayload {
  name: string;
  email: string;
  message: string;
  attachment?: AttachmentPayload;
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function sendContactEmail({
  name,
  email,
  message,
  attachment,
}: ContactMailPayload) {
  const transporter = createTransporter();
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;

  if (!transporter || !to || !from) {
    throw new Error("Contact email configuration is missing.");
  }

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `New portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin-bottom: 16px;">New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
    attachments: attachment
      ? [
          {
            filename: attachment.filename,
            content: attachment.content,
            contentType: attachment.contentType,
          },
        ]
      : undefined,
  });
}
