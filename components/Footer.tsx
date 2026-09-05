import { Logo } from "./Navbar";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Vertex-Software-Agency" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sahil-yatam-1a1740377/" },
  { label: "X", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-fog">
            Custom software development for startups and growing companies. Built with care,
            shipped with confidence.
          </p>
          <div className="mt-5 flex gap-4 font-mono">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-faint transition-colors hover:text-mist"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs tracking-[0.15em] text-faint uppercase">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-fog transition-colors hover:text-mist">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs tracking-[0.15em] text-faint uppercase">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-fog">
            <li>
              <a
                href="mailto:hello@vertexsoftware.dev"
                className="transition-colors hover:text-mist"
              >
                    vertexsoftwareagency@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+14155550142" className="transition-colors hover:text-mist">
                +91 7710917335 (Contact & WhatsAPP number)
              </a>
            </li>
            <li>Remote · India, Maharashtra, Mumbai</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-xs text-faint sm:flex-row">
          <span>© 2026 Vertex Software. All rights reserved.</span>
          <span>engineered · reliable · modern</span>
        </div>
      </div>
    </footer>
  );
}
