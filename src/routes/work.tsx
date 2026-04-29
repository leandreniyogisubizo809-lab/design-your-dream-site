import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Halftone Studio" },
      { name: "description", content: "Selected projects: SaaS apps, e-commerce, brand systems and marketing sites." },
      { property: "og:title", content: "Work — Halftone Studio" },
      { property: "og:description", content: "A look at recent projects across web, software and brand." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  { img: work1, title: "Norby", category: "E-commerce / Brand", year: "2025", desc: "A minimal direct-to-consumer experience for a Scandinavian fashion label." },
  { img: work2, title: "Meso", category: "Software / Fintech", year: "2025", desc: "A personal finance dashboard that turns spreadsheets into something humans love." },
  { img: work3, title: "Drovel", category: "Identity", year: "2024", desc: "A bold identity system for an indie ceramics studio — type, colour and packaging." },
  { img: work1, title: "Field Notes", category: "Editorial / Web", year: "2024", desc: "A long-form magazine for a creative agency, designed to read like print." },
  { img: work2, title: "Apex Cycle", category: "Software / Health", year: "2023", desc: "A cycling training app that pairs hardware data with motion-rich UI." },
  { img: work3, title: "Olive & Oak", category: "Brand / Web", year: "2023", desc: "Identity and storefront for a neighbourhood deli that punches above its weight." },
];

function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 pb-12 md:pt-28 md:pb-20">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Selected work — 2023 / 2025</p>
          <h1 className="font-display text-6xl md:text-9xl leading-[0.9] text-balance">
            A handful of<br />
            <span className="italic text-lime">favourites</span>.
          </h1>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {projects.map((p, i) => (
              <article key={p.title + i} className={`group ${i % 3 === 0 ? "md:col-span-2" : ""}`}>
                <div className={`overflow-hidden rounded-2xl bg-secondary ${i % 3 === 0 ? "aspect-[16/8]" : "aspect-[4/3]"}`}>
                  <img src={p.img} alt={`${p.title} — ${p.category}`} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-display text-3xl">{p.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{p.category} · {p.year}</p>
                  </div>
                  <span className="text-xl">↗</span>
                </div>
                <p className="text-foreground/70 mt-3 max-w-xl text-sm">{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-24 text-center">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Yours could be <span className="italic text-lime">next</span>.
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-10 bg-ink text-cream rounded-full px-6 py-3 text-sm hover:bg-ink/90 transition">
            Start a project →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
