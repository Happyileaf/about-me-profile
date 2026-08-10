import Reveal from "@/app/components/Reveal";
import { EMAIL } from "../lib/content";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Reveal>
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">好呀。</h1>
        {/* <h2 className="hero-subtitle">I build things for the AI era.</h2> */}
        <p className="hero-desc">
          一名 AI 前端工程师 / AI 全栈 工程师。
          现以 React / Next.js / Node.js 为主力，
          专注于 AI 工作流工程化与开发者工具的构建。聚焦 AI 驱动的前端工具链与代码智能化方向。
          从 Prompt 工程到 Agent 工作流，我相信好的工程实现能让复杂的 AI 能力变得对用户真正可用。
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn">
            vibe coding
          </a>
          <a href={`mailto:${EMAIL}`} className="btn btn-ghost">
            联系我 → {EMAIL}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
