import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Halftone Studio" },
      { name: "description", content: "Web design, software design, brand identity and development services for people and businesses." },
      { property: "og:title", content: "Services — Halftone Studio" },
      { property: "og:description", content: "Web, software and brand design — packaged for ambitious teams." },
    ],
  }),
  component: ServicesPage,
});

const packages = [
  {
    tag: "Most popular",
    name: "The Website",
    price: "from $4,800",
    duration: "3–4 weeks",
    desc: "A bespoke marketing site or portfolio designed and built end-to-end. Perfect for founders, freelancers and small businesses ready to look the part.",
    features: ["Strategy & sitemap", "Custom UI design (5–8 pages)", "Hand-coded build (Next.js or Webflow)", "Responsive across every device", "SEO foundations + analytics", "30 days post-launch support"],
  },
  {
    tag: "For ambitious teams",
    name: "The Product",
    price: "from $12,000",
    duration: "6–10 weeks",
    desc: "Software & SaaS design — from first wireframes to a shipped, production-ready interface. We work alongside your dev team or build with ours.",
    features: ["Product discovery workshop", "Information architecture", "Full design system", "End-to-end UI for web & mobile", "Prototyping & user testing", "Engineering handoff or build"],
  },
  {
    tag: "Identity",
    name: "The Brand",
    price: "from $3,200",
    duration: "2–3 weeks",
    desc: "A complete visual identity — logo, type, colour, voice — designed to live on every surface, from websites to business cards.",
    features: ["Brand strategy", "Logo + wordmark system", "Type & colour palette", "Stationery & social templates", "Brand guidelines PDF", "Source files included"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-20 md:pt-28 md:pb-28">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Services</p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.9] text-balance">
            Three ways to<br />
            <span className="italic text-lime">work</span> together.
          </h1>
          <p className="mt-10 max-w-xl text-lg text-foreground/70">
            Every project is custom, but most fall into one of these shapes.
            Not sure which fits? Tell us what you're building and we'll help
            you decide.
          </p>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24">
          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {packages.map((p, i) => (
              <article key={p.name} className={`bg-background p-10 flex flex-col ${i === 1 ? "md:bg-ink md:text-cream" : ""}`}>
                <div className="flex items-center justify-between mb-10">
                  <span className={`text-xs uppercase tracking-widest ${i === 1 ? "md:text-lime" : "text-muted-foreground"}`}>{p.tag}</span>
                  <span className="text-sm opacity-60">{p.duration}</span>
                </div>
                <h2 className="font-display text-5xl mb-2">{p.name}</h2>
                <p className={`font-display text-2xl italic mb-6 ${i === 1 ? "md:text-lime" : "text-foreground/60"}`}>{p.price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${i === 1 ? "md:text-cream/70" : "text-foreground/70"}`}>{p.desc}</p>
                <ul className="space-y-3 text-sm mb-10 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className={i === 1 ? "md:text-lime text-foreground" : "text-foreground"}>—</span>
                      <span className={i === 1 ? "md:text-cream/80" : "text-foreground/80"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm transition ${i === 1 ? "md:bg-lime md:text-ink bg-ink text-cream hover:opacity-90" : "border border-ink hover:bg-ink hover:text-cream"}`}>
                  Enquire →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-ink text-cream grain">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="text-sm uppercase tracking-widest text-cream/40 mb-4">FAQ</p>
              <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
                The bits<br />
                <span className="italic text-lime">people ask</span>.
              </h2>
            </div>
            <dl className="md:col-span-7 divide-y divide-cream/10">
              {[
                { q: "Do you offer ongoing retainers?", a: "Yes — once a project ships, we offer monthly partnerships for design, content updates and product evolution." },
                { q: "Can you work with my existing dev team?", a: "Absolutely. We hand off pixel-perfect designs and a documented system, and stay close through implementation." },
                { q: "What about smaller budgets?", a: "We run a limited number of one-week sprints each quarter for very small teams. Get in touch and we'll see what fits." },
                { q: "Where are you based?", a: "Independently run, working remotely with clients across Europe and the US." },
              ].map((f) => (
                <div key={f.q} className="py-8">
                  <dt className="font-display text-2xl mb-2">{f.q}</dt>
                  <dd className="text-cream/60 text-sm max-w-2xl">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
