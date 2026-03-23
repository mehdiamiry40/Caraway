import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  make: z.string().min(2, "Car make is required"),
  year: z.coerce.number().min(1950, "Invalid year").max(new Date().getFullYear() + 1, "Invalid year"),
  condition: z.string().min(2, "Please select a condition"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export function useSubmitQuote() {
  return useMutation({
    mutationFn: async (data: QuoteFormValues) => {
      // Simulate network request for static site
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Quote submitted:", data);
      return { success: true, message: "Quote received successfully" };
    },
  });
}
