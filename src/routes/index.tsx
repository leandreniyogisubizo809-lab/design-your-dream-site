import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MarqueeRow } from "@/components/marquee-row";
import { Link } from "@tanstack/react-router";
import heroObject from "@/assets/hero-object.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Halftone Studio — Web & Software Design for Ambitious Brands" },
      { name: "description", content: "We design and build modern websites, brand identities and software products for people and businesses that mean it." },
      { property: "og:title", content: "Halftone Studio — Web & Software Design" },
      { property: "og:description", content: "Web, software and brand design for ambitious people." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative grain">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-24 md:pt-24 md:pb-36">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <p className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                  <span className="inline-block w-2 h-2 rounded-full bg-lime animate-pulse" />
                  Booking projects for Q3 — 2026
                </p>
                <h1 className="font-display text-[15vw] md:text-[10vw] leading-[0.88] text-balance">
                  Websites &<br />
                  <span className="italic">software</span>, designed<br />
                  with <span className="text-lime">intention</span>.
                </h1>
              </div>
              <div className="md:col-span-4 md:pl-10">
                <p className="text-lg text-foreground/80 max-w-sm">
                  An independent studio crafting digital products and identities
                  for founders, creators and brands who refuse to look like
                  everyone else.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-ink text-cream rounded-full px-6 py-3 text-sm hover:bg-ink/90 transition"
                  >
                    Start a project →
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 border border-ink rounded-full px-6 py-3 text-sm hover:bg-ink hover:text-cream transition"
                  >
                    See the work
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 relative">
                <img
                  src={heroObject}
                  alt="Abstract sculptural form representing thoughtful design"
                  width={1280}
                  height={1280}
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="md:col-span-5 space-y-10">
                <div>
                  <p className="font-display text-6xl text-lime">120+</p>
                  <p className="text-sm text-muted-foreground mt-2">Projects shipped across SaaS, e-commerce and brand.</p>
                </div>
                <div>
                  <p className="font-display text-6xl">8 yrs</p>
                  <p className="text-sm text-muted-foreground mt-2">Designing on the web. From scrappy MVPs to category leaders.</p>
                </div>
                <div>
                  <p className="font-display text-6xl italic">1:1</p>
                  <p className="text-sm text-muted-foreground mt-2">You work directly with the maker. No middlemen, no decks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MarqueeRow />

        {/* SERVICES */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <p className="md:col-span-3 text-sm uppercase tracking-widest text-muted-foreground">/ 01 — Services</p>
            <h2 className="md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              A small studio with a<br />
              <span className="italic">wide</span> set of skills.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { n: "01", t: "Web Design", d: "Marketing sites, portfolios and storefronts that look as sharp as they perform." },
              { n: "02", t: "Software Design", d: "Dashboards, SaaS products and tools — from first wireframe to shipped UI." },
              { n: "03", t: "Brand Identity", d: "Logos, type systems and visual languages that scale across every surface." },
              { n: "04", t: "Development", d: "Hand-built in React, Next.js, Webflow or Shopify — fast, accessible, indexed." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-10 md:p-14 group hover:bg-ink hover:text-cream transition-colors duration-500">
                <div className="flex items-start justify-between mb-12">
                  <span className="text-sm text-muted-foreground group-hover:text-cream/50">{s.n}</span>
                  <span className="text-2xl group-hover:text-lime transition-transform group-hover:rotate-45">↗</span>
                </div>
                <h3 className="font-display text-4xl md:text-5xl mb-4">{s.t}</h3>
                <p className="text-foreground/70 group-hover:text-cream/70 max-w-md">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <p className="md:col-span-3 text-sm uppercase tracking-widest text-muted-foreground">/ 02 — Selected Work</p>
            <h2 className="md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95]">
              Recent <span className="italic">obsessions</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            <article className="md:col-span-8 group">
              <div className="overflow-hidden rounded-2xl bg-secondary aspect-[4/3]">
                <img src={work1} alt="Norby — minimal e-commerce experience" loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <span className="font-medium">Norby — Direct-to-consumer</span>
                <span className="text-muted-foreground">2025 / Web + Brand</span>
              </div>
            </article>
            <article className="md:col-span-4 group">
              <div className="overflow-hidden rounded-2xl bg-secondary aspect-[3/4]">
                <img src={work2} alt="Meso — finance dashboard" loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <span className="font-medium">Meso — Fintech app</span>
                <span className="text-muted-foreground">2025 / Software</span>
              </div>
            </article>
            <article className="md:col-span-12 group">
              <div className="overflow-hidden rounded-2xl bg-secondary aspect-[16/8]">
                <img src={work3} alt="Drovel — identity system" loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <span className="font-medium">Drovel — Identity system</span>
                <span className="text-muted-foreground">2024 / Brand</span>
              </div>
            </article>
          </div>
          <div className="mt-12 text-center">
            <Link to="/work" className="inline-flex items-center gap-2 border border-ink rounded-full px-6 py-3 text-sm hover:bg-ink hover:text-cream transition">
              View all projects →
            </Link>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-ink text-cream mt-24 grain">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-36">
            <div className="grid md:grid-cols-12 gap-10 mb-20">
              <p className="md:col-span-3 text-sm uppercase tracking-widest text-cream/40">/ 03 — Process</p>
              <h2 className="md:col-span-9 font-display text-5xl md:text-7xl leading-[0.95]">
                Four weeks. One<br />
                <span className="italic text-lime">honest</span> conversation.
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: "Week 01", t: "Discovery", d: "We dig into your goals, audience and constraints — no fluff." },
                { n: "Week 02", t: "Direction", d: "Two distinct creative routes. You pick the one that feels right." },
                { n: "Week 03", t: "Design", d: "Pixel-tight screens, motion and a system that scales." },
                { n: "Week 04", t: "Delivery", d: "We build, test, launch — then stick around for what's next." },
              ].map((s) => (
                <div key={s.n} className="border-t border-cream/15 pt-6">
                  <p className="text-cream/40 text-sm mb-6">{s.n}</p>
                  <h3 className="font-display text-3xl mb-3">{s.t}</h3>
                  <p className="text-cream/60 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-36">
          <figure className="max-w-4xl">
            <p className="font-display text-3xl md:text-5xl leading-[1.1] text-balance">
              "Working with Halftone felt like hiring a co-founder. They asked
              the questions our investors didn't, and shipped something we're
              <span className="italic text-lime"> genuinely proud </span>
              of."
            </p>
            <figcaption className="mt-10 flex items-center gap-4 text-sm">
              <div className="w-12 h-12 rounded-full bg-ink" />
              <div>
                <p className="font-medium">Sasha Lin</p>
                <p className="text-muted-foreground">Co-founder, Meso</p>
              </div>
            </figcaption>
          </figure>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
