import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/mail";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(12).max(4000),
});

const allowedFileTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
  "image/webp",
  "text/plain",
];

const maxFileSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const parsed = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Please provide a valid name, email, and message.",
        },
        { status: 400 },
      );
    }

    const file = formData.get("attachment");
    let attachment:
      | {
          filename: string;
          content: Buffer;
          contentType: string;
        }
      | undefined;

    if (file instanceof File && file.size > 0) {
      if (file.size > maxFileSize) {
        return NextResponse.json(
          { message: "Attachment size must be 5MB or less." },
          { status: 400 },
        );
      }

      if (file.type && !allowedFileTypes.includes(file.type)) {
        return NextResponse.json(
          { message: "This attachment type is not supported." },
          { status: 400 },
        );
      }

      attachment = {
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      };
    }

    await sendContactEmail({
      ...parsed.data,
      attachment,
    });

    return NextResponse.json({
      message: "Thanks, your message has been delivered successfully.",
    });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      {
        message:
          "The message could not be sent. Check your SMTP environment variables and try again.",
      },
      { status: 500 },
    );
  }
}
