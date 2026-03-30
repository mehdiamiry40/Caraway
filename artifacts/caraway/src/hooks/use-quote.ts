import { useCallback, useState } from "react";
import { z } from "zod";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(8, "Valid phone number is required"),
  make: z.string().min(2, "Car make is required"),
  year: z.coerce.number().min(1950, "Invalid year").max(new Date().getFullYear() + 1, "Invalid year"),
  condition: z.string().min(2, "Please select a condition"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

type MutateOptions = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSubmitQuote() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutate = useCallback(async (data: QuoteFormValues, options?: MutateOptions) => {
    const endpoint = (import.meta.env.VITE_QUOTE_ENDPOINT as string | undefined)?.trim();
    const isMockMode = import.meta.env.DEV && !endpoint;

    setIsPending(true);
    setErrorMessage(null);
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
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Quote submission failed with status ${response.status}`);
        }
      }
      setIsSuccess(true);
      options?.onSuccess?.();
    } catch {
      setIsSuccess(false);
      setErrorMessage("We couldn't send your request right now. Please call 1800 227 293.");
      options?.onError?.();
    } finally {
      setIsPending(false);
    }
  }, []);

  const resetMutation = useCallback(() => {
    setIsSuccess(false);
    setErrorMessage(null);
  }, []);

  return { mutate, isPending, isSuccess, errorMessage, reset: resetMutation };
}
