import Topbar from "@/app/components/Topbar";
import MobileNav from "@/app/components/MobileNav";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Work from "@/app/components/Work";
import Contact from "@/app/components/Contact";
import { ICONS } from "@/app/components/icons";
import { SOCIAL_LINKS, EMAIL } from "@/app/lib/content";

export default function Home() {
  return (
    <>
      <Topbar />
      <MobileNav />

      {/* Left social links (desktop) */}
      <aside className="social-bar" aria-label="社交外链">
        {SOCIAL_LINKS.map((social) => {
          const Icon = ICONS[social.icon];
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Icon />
            </a>
          );
        })}
      </aside>

      {/* Vertical email bar (desktop) */}
      <div className="email-bar" aria-hidden="true">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>

      <main className="layout-shell">
        <div className="layout-inner">
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />

          <footer>
            Designed &amp; Built by{" "}
            <a href={`mailto:${EMAIL}`}>Haoya</a> · 2026
          </footer>
        </div>
      </main>
    </>
  );
}
