"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/quote-schema";
import { submitContact } from "@/actions/contact";
import { CheckCircle2, Send } from "lucide-react";

const fieldIds = {
  name: "contact-name",
  email: "contact-email",
  phone: "contact-phone",
  message: "contact-message",
} as const;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setErrorMessage(null);
    const result = await submitContact(data);

    if (result.success) {
      setIsSuccess(true);
      reset();
    } else {
      setErrorMessage(result.message || "An error occurred.");
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden />
          </div>
          <h3 className="text-xl font-display font-bold text-primary mb-2">Message sent</h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-sm">
            We&apos;ll get back to you as soon as possible.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline" size="sm">
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
      <h2 className="text-xl font-display font-bold text-foreground mb-1">Send Us a Message</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Have a question? Fill out the form and we&apos;ll get back to you.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={fieldIds.email} className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <Input
              type="email"
              autoComplete="email"
              placeholder="jane@example.com"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? `${fieldIds.email}-error` : undefined}
              {...register("email")}
              id={fieldIds.email}
            />
            {errors.email && (
              <p id={`${fieldIds.email}-error`} className="text-destructive text-sm mt-1.5" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor={fieldIds.phone} className="block text-sm font-medium text-foreground mb-1.5">
              Phone <span className="text-muted-foreground font-normal">(optional)</span>
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
          <label htmlFor={fieldIds.message} className="block text-sm font-medium text-foreground mb-1.5">
            Message
          </label>
          <textarea
            placeholder="Tell us how we can help..."
            rows={4}
            className="flex w-full rounded-lg border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${fieldIds.message}-error` : undefined}
            {...register("message")}
            id={fieldIds.message}
          />
          {errors.message && (
            <p id={`${fieldIds.message}-error`} className="text-destructive text-sm mt-1.5" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" className="w-full h-12 text-base mt-1" isLoading={isSubmitting}>
          <Send className="h-4 w-4 mr-2" aria-hidden />
          Send message
        </Button>
        {errorMessage && (
          <p className="text-sm text-destructive text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
