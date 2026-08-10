import type { Metadata } from "next";
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
  title: "Haoya · AI Frontend Engineer",
  description:
    "Haoya — 专注于 AI 应用层的前端工程师，擅长把大模型能力封装成优雅、可交互的 Web 产品。",
  authors: [{ name: "Haoya" }],
  keywords: [
    "AI Frontend Engineer",
    "前端工程师",
    "LLM",
    "Agent",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Haoya · AI Frontend Engineer",
    description:
      "专注于 AI 应用层的前端工程师，擅长把大模型能力封装成优雅、可交互的 Web 产品。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
