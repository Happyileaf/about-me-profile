import Reveal from "@/app/components/Reveal";

type SkillGroup = {
  title: string;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "AI",
    items: [
      "Codex / Claude Code / Trae",
      "Agent & Tool Calling",
      "Multica",
      "Prompt Engineering / Harness Engineering",
      "Spec Kit",
      "LLM SDK (Vercel AI)",
    ],
  },
  {
    title: "语言",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "Python",
      "HTML / CSS",
    ],
  },
  {
    title: "框架",
    items: [
      "React / Next.js",
      "Vue 3",
      "Qiankun",
      "Koa2",
      "Backbone.js",
      "微信小程序",
    ],
  },
  {
    title: "工具",
    items: [
      "Git/Gitflow",
      "Webpack / Vite / Rsbuild",
      "Monorepo",
      "Nginx",
      "Docker",
      "Chrome DevTools",
    ],
  },
  {
    title: "云服务",
    items: [
      "Serverless",
      "Vercel",
      "Cloudflare",
    ],
  },
  {
    title: "设计",
    items: [
      "设计系统 / Token",
      "Tailwind CSS",
      "Figma",
    ],
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
            你好，我是 好呀。一位具有设计思维的前端软件工程师，专注于构建美观的界面和体验。

          </p>
          <p>
            我从传统前端起步，过去几年主要深耕前端工程化、微前端架构与设计系统方向，
            习惯于在像素级还原与工程化可维护性之间寻找平衡，认为设计意图和代码质量不应互相妥协。
          </p>
          <p>
            近年我在日常研发中引入 AI Agent 与大模型能力，建设前端 harness 工具链，
            把任务拆解、契约校验、测试门禁等重复性工作交给自动化流程，
            让自己和团队把精力集中在体验打磨与架构决策上。
            工作之外，我也持续关注 WebGL、可视化与组件库建设方向。
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
