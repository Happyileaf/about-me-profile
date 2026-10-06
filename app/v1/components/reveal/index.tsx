"use client";

import { useEffect, useRef, useState, type ElementType, type CSSProperties } from "react";

type RevealProps = {
  /** 渲染的元素类型，默认为 div */
  as?: ElementType;
  /** 追加的类名 */
  className?: string;
  /** 动画延迟，单位毫秒 */
  delay?: number;
  /** 透传的内联样式 */
  style?: CSSProperties;
  /** 被包裹的内容 */
  children?: React.ReactNode;
};

/**
 * 为内容包裹滚动进入视口时的淡入上移动画。
 * 动效降级通过 globals.css 中的 prefers-reduced-motion 处理。
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
