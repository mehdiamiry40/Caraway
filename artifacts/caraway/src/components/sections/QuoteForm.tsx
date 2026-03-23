import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSubmitQuote, quoteFormSchema, type QuoteFormValues } from "@/hooks/use-quote";
import { CheckCircle2 } from "lucide-react";

export function QuoteForm() {
  const { mutate, isPending, isSuccess } = useSubmitQuote();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = (data: QuoteFormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <section id="quote-section" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-[3rem] p-8 md:p-16 border border-border/60 shadow-xl relative overflow-hidden">
          
          {/* Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Get Your Free Cash Offer
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Takes less than 60 seconds. Enter your details below and our valuation experts will get back to you with a guaranteed price.
              </p>
              
              <div className="space-y-6 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="font-bold text-xl text-accent">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Provide Details</h4>
                    <p className="text-sm text-muted-foreground">Basic info about your vehicle</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="font-bold text-xl text-accent">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Accept Offer</h4>
                    <p className="text-sm text-muted-foreground">Review our cash price</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="font-bold text-xl text-accent">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Get Paid</h4>
                    <p className="text-sm text-muted-foreground">We tow it away and pay you</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">

                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Quote Received!</h3>
                  <p className="text-muted-foreground mb-8">Our team will contact you shortly with your guaranteed cash offer.</p>
                  <Button onClick={() => window.location.reload()} variant="outline">Submit Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Input placeholder="Your Name" {...register("name")} />
                      {errors.name && <span className="text-destructive text-sm mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <Input placeholder="Phone Number" type="tel" {...register("phone")} />
                      {errors.phone && <span className="text-destructive text-sm mt-1 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <Input placeholder="Car Make & Model (e.g. Toyota Corolla)" {...register("make")} />
                    {errors.make && <span className="text-destructive text-sm mt-1 block">{errors.make.message}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Input placeholder="Year (e.g. 2010)" type="number" {...register("year")} />
                      {errors.year && <span className="text-destructive text-sm mt-1 block">{errors.year.message}</span>}
                    </div>
                    <div>
                      <Select 
                        placeholder="Condition"
                        options={[
                          { value: "running", label: "Running" },
                          { value: "needs_work", label: "Needs Work" },
                          { value: "not_running", label: "Not Running" },
                          { value: "damaged", label: "Accident / Damaged" },
                          { value: "scrap", label: "Scrap / Junk" },
                        ]}
                        {...register("condition")} 
                      />
                      {errors.condition && <span className="text-destructive text-sm mt-1 block">{errors.condition.message}</span>}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg mt-4" isLoading={isPending}>
                    Get My Free Quote
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to receive a call regarding your quote. No obligation.
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
