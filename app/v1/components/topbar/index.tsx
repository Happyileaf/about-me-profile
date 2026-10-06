"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, RESUME_HREF } from "../../lib/content";

/**
 * 桌面端顶部导航，移动端通过 CSS 隐藏。
 * 根据滚动位置高亮当前所在区块。
 */
export default function Topbar() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    /** 滚动时计算距视口顶部最近的区块 */
    const onScroll = () => {
      const offset = window.innerHeight * 0.4;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) {
          current = section.id;
        }
      }
      /** 处于页面最顶部时不高亮任何项（Hero 无对应导航） */
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
