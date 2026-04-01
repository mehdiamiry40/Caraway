import { z } from "zod";

/** Matches Australian phone formats: 04xx, +614xx, landlines, 1800/1300 numbers */
const auPhoneRegex = /^(?:\+?61|0)[2-478]\d{8}$|^1[38]00\d{6}$/;

const stripPhone = (v: string) => v.replace(/[\s\-()]/g, "");

/** Honeypot field — present on every public form but hidden from real users. */
const honeypotField = z.string().optional();

const requiredPhone = z
  .string()
  .transform(stripPhone)
  .pipe(z.string().regex(auPhoneRegex, "Enter a valid Australian phone number"));

const optionalPhone = z
  .string()
  .optional()
  .transform((v) => (v ? stripPhone(v) : ""))
  .pipe(
    z.string().refine(
      (v) => v === "" || auPhoneRegex.test(v),
      "Enter a valid Australian phone number"
    )
  );

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: requiredPhone,
  make: z.string().min(2, "Car make is required"),
  year: z.coerce.number().min(1950, "Invalid year").max(new Date().getFullYear() + 1, "Invalid year"),
  condition: z.string().min(2, "Please select a condition"),
  honeypot: honeypotField,
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: optionalPhone,
  message: z.string().min(10, "Please provide more detail (at least 10 characters)"),
  honeypot: honeypotField,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
