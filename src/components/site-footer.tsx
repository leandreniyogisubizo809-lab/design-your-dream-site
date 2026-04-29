import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-widest text-cream/50 mb-6">
              Have an idea?
            </p>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Let's build<br />
              <span className="italic text-lime">something</span> good.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 text-lg border-b border-cream/40 pb-1 hover:border-lime hover:text-lime transition-colors"
            >
              hello@halftone.studio
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-cream/40 uppercase tracking-widest text-xs mb-4">Studio</p>
              <ul className="space-y-2">
                <li><Link to="/work" className="hover:text-lime">Work</Link></li>
                <li><Link to="/services" className="hover:text-lime">Services</Link></li>
                <li><Link to="/about" className="hover:text-lime">About</Link></li>
                <li><Link to="/contact" className="hover:text-lime">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-cream/40 uppercase tracking-widest text-xs mb-4">Elsewhere</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-lime">Twitter / X</a></li>
                <li><a href="#" className="hover:text-lime">Dribbble</a></li>
                <li><a href="#" className="hover:text-lime">Instagram</a></li>
                <li><a href="#" className="hover:text-lime">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Halftone Studio. All rights reserved.</p>
          <p>Designed & built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
