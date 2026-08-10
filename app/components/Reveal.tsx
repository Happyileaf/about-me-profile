"use client";

import { useEffect, useRef, useState, type ElementType, type CSSProperties } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  children?: React.ReactNode;
};

/**
 * Wraps content with a subtle fade-up entrance animation when it scrolls
 * into view. Respects prefers-reduced-motion via CSS (see globals.css).
 */
export default function Reveal({
  as,
  className = "",
  delay = 0,
  style,
  children,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms`, ...style } : style}
    >
      {children}
    </Tag>
  );
}
