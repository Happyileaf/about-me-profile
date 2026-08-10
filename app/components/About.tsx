import Reveal from "@/app/components/Reveal";

type SkillGroup = {
  title: string;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "AI",
    items: ["LLM SDK (Vercel AI / LangChain)", "RAG & Vector DB", "Agent & Tool Calling", "Prompt Engineering"],
  },
  {
    title: "语言",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML / CSS"],
  },
  {
    title: "框架",
    items: ["React / Next.js", "Vue 3", "Node.js / FastAPI", "Three.js / WebGL"],
  },
  {
    title: "工具",
    items: ["Git & GitHub", "Vite / Webpack", "Docker", "Chrome DevTools"],
  },
  {
    title: "云服务",
    items: ["Serverless", "Vercel", "Cloudflare"],
  },
  {
    title: "设计",
    items: ["Figma", "Tailwind CSS", "设计系统 / Token", "Prototyping"],
  },
];

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <div className="section-heading">
          <span className="num">01.</span>
          <h2>关于我</h2>
        </div>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-text" delay={80}>
          <p>
            你好，我是 Haoya。我从传统前端起步，过去几年逐步把重心转向 AI 原生应用的工程化落地。
            我习惯于在像素级还原与工程化可维护性之间寻找平衡，认为设计意图和代码质量不应互相妥协。
          </p>
          <p>
            我热衷于把 LLM、Agent、RAG 这些复杂能力包装成用户可感知的体验：一次顺滑的流式输出、
            一个可解释的引用溯源、一条能被人工介入的工作流，都是我日常打磨的细节。
            工作之外，我也持续关注 WebGL、可视化与设计系统方向。
          </p>
        </Reveal>

        <Reveal className="avatar-wrap" delay={160}>
          <div className="avatar">H</div>
          <div className="avatar-frame" aria-hidden="true" />
        </Reveal>
      </div>

      <p className="skills-label">What I Work With</p>
      <div className="skills-groups">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} className="skill-group" delay={i * 60}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
