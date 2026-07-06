import { Heart, Clock, Shirt, Baby, Users, type LucideIcon } from "lucide-react";
import { PlanYourVisitButton } from "@/components/PlanYourVisitButton";
import { siteConfig } from "@/config/site";

const icons: Record<string, LucideIcon> = { Heart, Clock, Shirt, Baby, Users };

export function WhatToExpect() {
  return (
    <section id="new-here" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            New here?
          </p>
          <h2 className="font-display text-3xl font-semibold md:text-4xl lg:text-5xl">
            Here's what to expect when you visit.
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Walking into a new church can feel like a lot. Here's the honest version of what
            gathering with us looks like.
          </p>
        </div>


        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.expect.map((item) => {
            const Icon = icons[item.icon] ?? Heart;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <PlanYourVisitButton size="lg">Let us know you're coming</PlanYourVisitButton>
        </div>
      </div>
    </section>
  );
}
