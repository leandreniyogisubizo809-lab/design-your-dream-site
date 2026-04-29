import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Halftone Studio" },
      { name: "description", content: "Tell us about your project. We reply to every enquiry within two business days." },
      { property: "og:title", content: "Contact — Halftone Studio" },
      { property: "og:description", content: "Start a project with Halftone." },
    ],
  }),
  component: ContactPage,
});

const budgets = ["Under $5k", "$5k–15k", "$15k–40k", "$40k+"];
const services = ["Web Design", "Software Design", "Brand Identity", "Development", "Not sure"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 md:pt-28 pb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Contact</p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.9] text-balance">
            Tell us what<br />
            you're <span className="italic text-lime">making</span>.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-foreground/70">
            Drop a few details below or email us directly at
            <a href="mailto:hello@halftone.studio" className="underline decoration-lime decoration-2 underline-offset-4 ml-1">hello@halftone.studio</a>.
            We reply within two business days.
          </p>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-border rounded-2xl p-12 bg-secondary/40">
                <h2 className="font-display text-4xl mb-3">Thanks — got it.</h2>
                <p className="text-foreground/70">We'll get back to you within two business days. In the meantime, take a look at the <a href="/work" className="underline">work</a>.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                <Field label="Your name">
                  <input required name="name" className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-lg" placeholder="Alex Doe" />
                </Field>
                <Field label="Email">
                  <input required type="email" name="email" className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-lg" placeholder="alex@company.com" />
                </Field>
                <Field label="Company (optional)">
                  <input name="company" className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-lg" placeholder="Acme Inc." />
                </Field>

                <Field label="What do you need?">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setService(s)}
                        className={`px-4 py-2 rounded-full border text-sm transition ${service === s ? "bg-ink text-cream border-ink" : "border-foreground/30 hover:border-foreground"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Ballpark budget">
                  <div className="flex flex-wrap gap-2 pt-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setBudget(b)}
                        className={`px-4 py-2 rounded-full border text-sm transition ${budget === b ? "bg-lime text-ink border-lime" : "border-foreground/30 hover:border-foreground"}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Tell us about the project">
                  <textarea required rows={5} name="message" className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-lg resize-none" placeholder="What are you building, who's it for, and when do you need it?" />
                </Field>

                <button type="submit" className="inline-flex items-center gap-2 bg-ink text-cream rounded-full px-8 py-4 hover:bg-ink/90 transition">
                  Send enquiry →
                </button>
              </form>
            )}
          </div>

          <aside className="md:col-span-4 md:pl-10 space-y-10">
            <Block label="Email">
              <a href="mailto:hello@halftone.studio" className="block hover:text-lime">hello@halftone.studio</a>
            </Block>
            <Block label="Hours">
              <p>Mon — Fri</p>
              <p className="text-muted-foreground text-sm">9:00 — 18:00 CET</p>
            </Block>
            <Block label="Response time">
              <p>Within 2 business days</p>
            </Block>
            <Block label="Currently">
              <p className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-lime animate-pulse" /> Booking Q3 — 2026</p>
            </Block>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</p>
      <div className="font-display text-2xl">{children}</div>
    </div>
  );
}
