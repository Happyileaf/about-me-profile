"use client";

import { useCallback, useEffect, useState } from "react";
import { NAV_ITEMS, EMAIL, RESUME_HREF } from "@/app/lib/content";
import { MenuIcon, XIcon } from "@/app/components/icons";

/**
 * Mobile top bar + full-screen slide-in menu.
 * - Opens/closes via the hamburger button.
 * - Closes on Escape, on link selection, and when resizing to desktop.
 * - Locks body scroll while open.
 */
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) close();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, close]);

  return (
    <>
      <header className="mobile-bar">
        <a href="#hero" className="sidebar-logo" aria-label="返回首页">
          H.
        </a>
        <div className="mobile-bar-actions">
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume-link"
          >
            获取简历
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="打开菜单"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-label="移动端导航"
      >
        <button
          type="button"
          className="close-btn"
          aria-label="关闭菜单"
          onClick={close}
        >
          <XIcon />
        </button>
        <nav>
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={item.href} onClick={close}>
              <span className="num">{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${EMAIL}`} className="btn btn-ghost" onClick={close}>
          发邮件
        </a>
      </div>
    </>
  );
}
