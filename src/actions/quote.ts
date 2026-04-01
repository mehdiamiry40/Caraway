"use server";

import { QuoteFormValues, quoteFormSchema } from "@/lib/quote-schema";
import { submitForm } from "./submit-form";

export async function submitQuote(data: QuoteFormValues) {
  return submitForm({
    schema: quoteFormSchema,
    data,
    endpointEnvVar: "NEXT_PUBLIC_QUOTE_ENDPOINT",
    label: "Quote submission",
  });
}
