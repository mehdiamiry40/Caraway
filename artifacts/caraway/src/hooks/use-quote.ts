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
};

export function useSubmitQuote() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mutate = useCallback(async (_data: QuoteFormValues, options?: MutateOptions) => {
    setIsPending(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      options?.onSuccess?.();
    } finally {
      setIsPending(false);
    }
  }, []);

  const resetMutation = useCallback(() => {
    setIsSuccess(false);
  }, []);

  return { mutate, isPending, isSuccess, reset: resetMutation };
}
