import type { ReactNode } from "react";

/**
 * 根布局：仅提供最基础的 HTML 结构。
 * 各版本的字体、元信息与样式由其目录内的布局自行管理。
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
