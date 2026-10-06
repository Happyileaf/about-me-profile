import Topbar from "./components/topbar";
import MobileNav from "./components/mobile-nav";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Work from "./components/work";
import Contact from "./components/contact";
import { ICONS } from "./components/icons";
import { SOCIAL_LINKS, EMAIL } from "./lib/content";

/** v1 版本首页，经典深色工程师风格单页布局 */
export default function V1Home() {
  return (
    <div className="v1-root">
      <Topbar />
      <MobileNav />

      {/* 桌面端左侧社交外链 */}
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

      {/* 桌面端右侧竖排邮箱 */}
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
    </div>
  );
}
