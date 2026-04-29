const items = [
  "Web Design",
  "Software Design",
  "Brand Identity",
  "Web Development",
  "UI / UX",
  "E-commerce",
  "Webflow",
  "SaaS Products",
];

export function MarqueeRow() {
  return (
    <div className="overflow-hidden border-y border-border py-6 bg-background">
      <div className="flex marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-5xl md:text-7xl px-8 text-foreground/90"
          >
            {item}
            <span className="text-lime mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
