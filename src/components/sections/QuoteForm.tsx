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
import { CheckCircle2, Shield, Clock, Phone, ArrowRight } from "lucide-react";
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
    if (data.honeypot) {
      setIsSuccess(true);
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

  return (
    <section id="quote-section" className="section-y bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — compelling copy */}
          <div className="flex flex-col justify-center lg:sticky lg:top-32">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free quote</p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-display font-bold text-foreground mb-5 text-balance leading-tight">
              Get Your Cash Offer Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tell us about the car. We&apos;ll call or text back with a price range and next steps — usually within a few hours during business hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Clock, title: "Same-day response", desc: "We usually reply within a few hours during business hours." },
                { icon: Phone, title: "What happens next", desc: "We confirm details, agree a price before pickup, then pay when we collect." },
                { icon: Shield, title: "Zero obligation", desc: "Not happy with the offer? No worries — there's no pressure to accept." },
              ].map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-card flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-[15px]">{b.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg ring-1 ring-border/30">
            {isSuccess ? (
              <div role="status" aria-live="polite" aria-atomic="true" className="flex flex-col items-center justify-center text-center py-8 sm:py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" aria-hidden />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Thanks — we&apos;ve got your details</h3>
                <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
                  Our team will contact you using the number you provided. Need someone sooner? Call{" "}
                  <a href={BUSINESS.phoneHref} className="text-primary font-semibold underline underline-offset-2">
                    {BUSINESS.phone}
                  </a>
                  .
                </p>
                <Button onClick={() => { setIsSuccess(false); setErrorMessage(null); }} variant="outline">
                  Submit another vehicle
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="mb-2">
                  <h3 className="font-display font-bold text-xl text-foreground">Vehicle Details</h3>
                  <p className="text-sm text-muted-foreground mt-1">Fill in what you know — we&apos;ll work out the rest.</p>
                </div>

                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="quote-website">Website</label>
                  <input type="text" id="quote-website" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={fieldIds.name} className="block text-sm font-medium text-foreground mb-2">
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
                    <label htmlFor={fieldIds.phone} className="block text-sm font-medium text-foreground mb-2">
                      Phone number
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
                  <label htmlFor={fieldIds.make} className="block text-sm font-medium text-foreground mb-2">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={fieldIds.year} className="block text-sm font-medium text-foreground mb-2">
                      Year (approx.)
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
                    <label htmlFor={fieldIds.condition} className="block text-sm font-medium text-foreground mb-2">
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

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base font-bold mt-3 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl group"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Get My Free Quote"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </Button>

                {errorMessage && (
                  <p className="text-sm text-destructive text-center" role="alert">
                    {errorMessage}
                  </p>
                )}
                <p className="text-xs text-center text-muted-foreground leading-relaxed pt-1">
                  By submitting you agree we may contact you about this enquiry. See our{" "}
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
    </section>
  );
}
