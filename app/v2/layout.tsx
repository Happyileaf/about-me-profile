import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, JetBrains_Mono, Noto_Serif_SC, Newsreader } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-serif",
  subsets: ["cyrillic", "latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "好呀 — 全栈系统与现代 Web 档案",
  description:
    "好呀（Haoya）的个人全栈系统工程档案。全栈工程师与现代 Web 架构师，专注于高并发服务端、分布式状态模型、端到端类型安全与现代主义瑞士排印前端。",
  authors: [{ name: "Haoya" }],
  keywords: [
    "FullStack Engineer",
    "Frontend Architect",
    "全栈工程师",
    "前端架构师",
    "Swiss Graphic Design",
    "Portfolio",
  ],
  openGraph: {
    title: "好呀 — 全栈系统与现代 Web 档案",
    description:
      "好呀（Haoya）的个人全栈系统工程档案。全栈工程师与现代 Web 架构师，专注于高并发服务端、分布式状态模型、端到端类型安全与现代主义瑞士排印前端。",
    type: "website",
    locale: "zh_CN",
  },
};

/** v2 版本布局：字体、元信息与样式均限定在本版本内 */
export default function V2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`v2-layout ${plusJakartaSans.variable} ${jetBrainsMono.variable} ${notoSerifSC.variable} ${newsreader.variable}`.trim()}>
      {children}
    </div>
  );
}
