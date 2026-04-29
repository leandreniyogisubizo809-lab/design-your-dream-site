import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroObject from "@/assets/hero-object.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Halftone Studio" },
      { name: "description", content: "An independent design studio building digital products and brands for ambitious teams." },
      { property: "og:title", content: "About — Halftone Studio" },
      { property: "og:description", content: "Small studio. Big opinions. Made for the long game." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-20 md:pt-28">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">About the studio</p>
          <h1 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl text-balance">
            We're a tiny studio that takes the
            <span className="italic text-lime"> long </span>
            view on craft.
          </h1>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7 order-2 md:order-1 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Halftone is an independent design practice based wherever the
              wifi is. We've spent the last eight years designing websites,
              identities and software for everything from VC-backed startups
              to one-person shops.
            </p>
            <p>
              We believe the best work happens in small rooms. So we keep
              projects focused, partnerships close, and decks to a minimum.
              When you hire us, you work directly with the people doing
              the work.
            </p>
            <p>
              We care about typography that breathes, interfaces that don't
              insult their users, and shipping things — not just designing
              them.
            </p>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <img src={heroObject} alt="Studio object" loading="lazy" width={1280} height={1280} className="w-full rounded-2xl" />
          </div>
        </section>

        <section className="bg-ink text-cream mt-24 grain">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 md:py-32">
            <p className="text-sm uppercase tracking-widest text-cream/40 mb-10">Principles</p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { t: "Less, but better.", d: "We strip projects down to what matters. Then we polish that bit until it shines." },
                { t: "Honest collaboration.", d: "No pitches, no surprise invoices. Just clear comms and weekly check-ins." },
                { t: "Ship, then iterate.", d: "Perfect is the enemy of live. We'd rather launch and learn than polish forever." },
              ].map((p) => (
                <div key={p.t}>
                  <h3 className="font-display text-3xl md:text-4xl mb-4">
                    {p.t.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="italic text-lime">{p.t.split(" ").slice(-1)}</span>
                  </h3>
                  <p className="text-cream/60 text-sm">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-10">A few clients we've made things for</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 font-display text-3xl md:text-4xl text-foreground/40">
            <span>Norby</span>
            <span className="italic">Meso</span>
            <span>Drovel</span>
            <span>Apex</span>
            <span className="italic">Field Notes</span>
            <span>Olive & Oak</span>
            <span>Studio Six</span>
            <span className="italic">Wayfare</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
