"use client";

import { useRef, useState } from "react";
import { HiArrowUpTray, HiOutlinePaperAirplane } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(values: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 12) {
    errors.message = "Please share a little more detail in your message.";
  }

  return errors;
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setMessage("Sending your message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(payload.message ?? "Message sent successfully.");
      setErrors({});
      setSelectedFile("");
      formRef.current?.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} />
          {errors.name ? <p className="text-sm text-rose-500">{errors.name}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className="text-sm text-rose-500">{errors.email}</p> : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about the product, platform, or automation challenge you want to solve."
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <p className="text-sm text-rose-500">{errors.message}</p> : null}
      </div>

      <div className="space-y-3">
        <Label htmlFor="attachment">Attachment</Label>
        <label
          htmlFor="attachment"
          className="flex cursor-pointer items-center justify-between rounded-[1.5rem] border border-dashed border-border/80 bg-background/35 px-4 py-4 text-sm text-muted-foreground transition hover:border-primary/35 hover:text-foreground"
        >
          <span className="flex items-center gap-2">
            <HiArrowUpTray className="size-4" />
            {selectedFile || "Attach a brief, spec, or supporting document"}
          </span>
          <span className="rounded-full border border-border/70 px-3 py-1 text-xs">Optional</span>
        </label>
        <Input
          ref={fileInputRef}
          id="attachment"
          name="attachment"
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.txt"
          onChange={(event) => {
            const file = event.target.files?.[0];
            setSelectedFile(file?.name ?? "");
          }}
        />
        <p className="text-xs text-muted-foreground">
          Attachments up to 5MB are supported and will be forwarded to your inbox.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
          <HiOutlinePaperAirplane className="size-4" />
        </Button>
        <p
          className={`text-sm ${
            status === "error"
              ? "text-rose-500"
              : status === "success"
                ? "text-emerald-500"
                : "text-muted-foreground"
          }`}
        >
          {message || "Your message will be delivered to your configured contact email."}
        </p>
      </div>
    </form>
  );
}
