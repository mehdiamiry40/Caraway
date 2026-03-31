"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/quote-schema";
import { submitQuote } from "@/actions/quote";
import { CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const fieldIds = {
  name: "quote-name",
  phone: "quote-phone",
  make: "quote-make",
  year: "quote-year",
  condition: "quote-condition",
} as const;

export function QuoteForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setErrorMessage(null);
    const result = await submitQuote(data);
    
    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setErrorMessage(result.message || "An error occurred.");
    }
  };

  const resetMutation = () => {
    setIsSuccess(false);
    setErrorMessage(null);
  };

  return (
    <section id="quote-section" className="section-y bg-muted relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-14 border border-border/60 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 relative z-10">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4 md:mb-6 text-balance">
                Get Your Cash for Cars Brisbane Quote
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tell us about the car. We&apos;ll call or text back with a price range and next steps — usually within one business day. No obligation.
              </p>

              <div className="space-y-5 hidden lg:block border-l-2 border-border pl-6">
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">What happens next</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    We confirm details, agree a price before pickup, then pay you when we collect the vehicle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-6 sm:p-8 border border-border/50">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 sm:py-12">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2">Thanks — we&apos;ve got your details</h3>
                  <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                    Our team will contact you using the number you provided. If you need someone sooner, call{" "}
                    <a href={BUSINESS.phoneHref} className="text-primary font-semibold underline underline-offset-2">
                      {BUSINESS.phone}
                    </a>
                    .
                  </p>
                  <Button onClick={() => resetMutation()} variant="outline">
                    Submit another vehicle
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={fieldIds.name} className="block text-sm font-medium text-foreground mb-1.5">
                        Your name
                      </label>
                      <Input
                        autoComplete="name"
                        placeholder="Jane Smith"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? `${fieldIds.name}-error` : undefined}
                        {...register("name")}
                        id={fieldIds.name}
                      />
                      {errors.name && (
                        <p id={`${fieldIds.name}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={fieldIds.phone} className="block text-sm font-medium text-foreground mb-1.5">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        autoComplete="tel"
                        placeholder="04xx xxx xxx"
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={errors.phone ? `${fieldIds.phone}-error` : undefined}
                        {...register("phone")}
                        id={fieldIds.phone}
                      />
                      {errors.phone && (
                        <p id={`${fieldIds.phone}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor={fieldIds.make} className="block text-sm font-medium text-foreground mb-1.5">
                      Make &amp; model
                    </label>
                    <Input
                      autoComplete="off"
                      placeholder="e.g. Toyota Corolla"
                      aria-invalid={errors.make ? true : undefined}
                      aria-describedby={errors.make ? `${fieldIds.make}-error` : undefined}
                      {...register("make")}
                      id={fieldIds.make}
                    />
                    {errors.make && (
                      <p id={`${fieldIds.make}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                        {errors.make.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor={fieldIds.year} className="block text-sm font-medium text-foreground mb-1.5">
                        Year
                      </label>
                      <Input
                        inputMode="numeric"
                        placeholder="e.g. 2012"
                        aria-invalid={errors.year ? true : undefined}
                        aria-describedby={errors.year ? `${fieldIds.year}-error` : undefined}
                        {...register("year")}
                        id={fieldIds.year}
                      />
                      {errors.year && (
                        <p id={`${fieldIds.year}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                          {errors.year.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={fieldIds.condition} className="block text-sm font-medium text-foreground mb-1.5">
                        Condition
                      </label>
                      <Select
                        placeholder="Select condition"
                        options={[
                          { value: "running", label: "Running" },
                          { value: "needs_work", label: "Needs work" },
                          { value: "not_running", label: "Not running" },
                          { value: "damaged", label: "Accident / damaged" },
                          { value: "scrap", label: "Scrap / junk" },
                        ]}
                        aria-invalid={errors.condition ? true : undefined}
                        aria-describedby={errors.condition ? `${fieldIds.condition}-error` : undefined}
                        {...register("condition")}
                        id={fieldIds.condition}
                      />
                      {errors.condition && (
                        <p id={`${fieldIds.condition}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                          {errors.condition.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-base sm:text-lg mt-2" isLoading={isSubmitting}>
                    Send details
                  </Button>
                  {errorMessage && (
                    <p className="text-sm text-destructive text-center" role="alert">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    By submitting, you agree we may contact you about this enquiry. You can opt out anytime. See our{" "}
                    <Link href="/privacy" className="text-primary underline underline-offset-2">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
