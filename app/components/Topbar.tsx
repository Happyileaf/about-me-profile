"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, RESUME_HREF } from "@/app/lib/content";

/**
 * Desktop top navigation. Hidden on mobile via CSS.
 * Highlights the section currently in view (scroll-spy).
 */
export default function Topbar() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Fallback: track which section is closest to the top on scroll.
    const onScroll = () => {
      const offset = window.innerHeight * 0.4;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id;
        }
      }
      // If we're near the very top, highlight nothing (hero has no nav entry).
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside className="topbar" aria-label="主导航">
      <a href="#hero" className="sidebar-logo" aria-label="返回首页">
        H.
      </a>
      <div className="topbar-right">
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeId === item.id ? "active" : undefined}
            >
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            获取简历
          </a>
        </nav>
      </div>
    </aside>
  );
}
