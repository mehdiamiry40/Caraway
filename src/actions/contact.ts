"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/quote-schema";

export async function submitContact(data: ContactFormValues) {
  const parsed = contactFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data" };
  }

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();
  const isMockMode = process.env.NODE_ENV === "development" && !endpoint;

  try {
    if (isMockMode) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } else {
      if (!endpoint) {
        throw new Error("Contact submission endpoint is not configured");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error(`Contact submission failed with status ${response.status}`);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Contact Submission Error:", error);
    return {
      success: false,
      message: "We couldn't send your message right now. Please call 1800 227 293.",
    };
  }
}
