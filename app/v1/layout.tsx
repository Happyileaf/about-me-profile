import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haoya · AI FullStack Engineer",
  description:
    "Haoya — 专注于 AI 应用层的前端工程师，擅长把大模型能力封装成优雅、可交互的 Web 产品。",
  authors: [{ name: "Haoya" }],
  keywords: [
    "AI Frontend Engineer",
    "AI FullStack Engineer",
    "前端工程师",
    "全栈工程师",
    "LLM",
    "Agent",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Haoya · AI FullStack Engineer",
    description:
      "专注于 AI 应用层的前端工程师，擅长把大模型能力封装成优雅、可交互的 Web 产品。",
    type: "website",
    locale: "zh_CN",
  },
};

/** v1 版本布局：字体、元信息与样式均限定在本版本内 */
export default function V1Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`v1-layout ${inter.variable} ${jetbrainsMono.variable}`.trim()}>
      {children}
    </div>
  );
}
