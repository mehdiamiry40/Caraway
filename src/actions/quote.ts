"use server";

import { QuoteFormValues, quoteFormSchema } from "@/lib/quote-schema";
import { BUSINESS } from "@/lib/site";

export async function submitQuote(data: QuoteFormValues) {
  // Validate data server-side
  const parsed = quoteFormSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, message: "Invalid form data" };
  }

  const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT?.trim();
  const isMockMode = process.env.NODE_ENV === "development" && !endpoint;

  try {
    if (isMockMode) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } else {
      if (!endpoint) {
        throw new Error("Quote submission endpoint is not configured");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error(`Quote submission failed with status ${response.status}`);
      }
    }
    
    return { success: true };
  } catch (error) {
    console.error("Quote Submission Error:", error);
    return { 
      success: false, 
      message: `We couldn't send your request right now. Please call ${BUSINESS.phone}.`
    };
  }
}
