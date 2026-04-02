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
import { CheckCircle2, Shield, Clock, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const fieldIds = {
  name: "quote-name",
  phone: "quote-phone",
  make: "quote-make",
  year: "quote-year",
  condition: "quote-condition",
} as const;

const benefits = [
  { icon: Clock, title: "Same-day response", desc: "We usually reply within a few hours during business hours." },
  { icon: Phone, title: "What happens next", desc: "We confirm details, agree a price before pickup, then pay when we collect." },
  { icon: Shield, title: "No obligation", desc: "Not happy with the offer? No worries — there's zero pressure to accept." },
];

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
    if (data.honeypot) {
      setIsSuccess(true); // Fake success for bots
      return;
    }
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
    <section id="quote-section" className="section-y bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-border/50 shadow-[0_4px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
            <div className="flex flex-col justify-center">
              <p className="section-label mb-3">Free quote</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4 md:mb-6 text-balance leading-tight">
                Get Your Cash for Cars Brisbane Quote
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                Tell us about the car. We&apos;ll call or text back with a price range and next steps — usually within one business day. No obligation.
              </p>

              <div className="hidden lg:flex flex-col gap-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/[0.06] flex items-center justify-center shrink-0">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm">{b.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/60 rounded-2xl p-6 sm:p-8 border border-border/40">
              {isSuccess ? (
                <div role="status" aria-live="polite" aria-atomic="true" className="h-full flex flex-col items-center justify-center text-center py-10 sm:py-12">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" aria-hidden />
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
                  {/* Honeypot — hidden from real users, traps bots */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="quote-website">Website</label>
                    <input
                      type="text"
                      id="quote-website"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                  </div>
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
                    {isSubmitting ? "Sending…" : "Get my free quote"}
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
