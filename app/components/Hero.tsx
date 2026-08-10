import Reveal from "@/app/components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <Reveal>
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Haoya.</h1>
        <h2 className="hero-subtitle">I build things for the AI era.</h2>
        <p className="hero-desc">
          我是一名专注于 AI 应用层的前端工程师，擅长把大模型能力封装成优雅、可交互的 Web 产品。
          从 Prompt 工程到 Agent 工作流，我相信好的工程实现能让复杂的 AI 能力变得对用户真正可用。
        </p>
        <div className="hero-cta">
          <a href="#work" className="btn">
            查看作品
          </a>
          <a href="#contact" className="btn btn-ghost">
            联系我 →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
