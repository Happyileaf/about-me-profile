/**
 * 根路径占位页面。
 * 实际渲染由 next.config.ts 中的 rewrite（beforeFiles 阶段）接管，
 * 会内部指向 version.config.ts 配置的激活版本，因此本组件不会被渲染。
 */
export default function Home() {
  return null;
}
