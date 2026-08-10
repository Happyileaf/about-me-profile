import Reveal from "@/app/components/Reveal";
import { GithubIcon, ExternalLinkIcon } from "@/app/components/icons";

type Project = {
  code: string;
  tag: string;
  title: string;
  href: string;
  desc: string;
  tech: string[];
  reverse?: boolean;
};

const PROJECTS: Project[] = [
  {
    code: "// project-01",
    tag: "Featured Project",
    title: "AI Chat Studio",
    href: "#",
    desc: "面向团队的多模型对话工作台，支持 Prompt 版本管理、工具调用可视化与对话分支对比。通过结构化消息协议统一不同模型的流式输出，并提供可回放的调用链路，帮助团队沉淀可复用的 AI 工作流。",
    tech: ["React", "TypeScript", "Vercel AI SDK", "Tailwind", "WebSocket"],
  },
  {
    code: "// project-02",
    tag: "Featured Project",
    title: "RAG Console",
    href: "#",
    desc: "企业知识库检索调试平台，可视化文档切片、向量召回与引用溯源。支持多套 Embedding 与向量库的 A/B 对比，将 RAG 链路中每一步的中间结果暴露给工程师，显著降低调参排错成本。",
    tech: ["Next.js", "TypeScript", "LangChain", "Vector DB", "D3.js"],
    reverse: true,
  },
  {
    code: "// project-03",
    tag: "Featured Project",
    title: "Agent Flow",
    href: "#",
    desc: "拖拽式 Agent 工作流编辑器，基于 React Flow 构建，支持多 Agent 协作、条件分支与人工介入节点。内置运行时可视化面板，可逐步回放每一次工具调用与状态变更，让复杂 Agent 流程对业务方可读、可审。",
    tech: ["React", "React Flow", "TypeScript", "Zustand", "FastAPI"],
  },
];

function ProjectPreview({ code }: { code: string }) {
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="preview-code">{code}</div>
      <div className="browser-chrome">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-bar mid" />
      <div className="preview-bar short" />
      <div className="preview-blocks">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work">
      <Reveal>
        <div className="section-heading">
          <span className="num">03.</span>
          <h2>精选作品</h2>
        </div>
      </Reveal>

      {PROJECTS.map((p, i) => (
        <Reveal
          as="article"
          key={p.title}
          className={p.reverse ? "project reverse" : "project"}
          delay={i * 80}
        >
          <ProjectPreview code={p.code} />
          <div className="project-content">
            <p className="project-tag">{p.tag}</p>
            <h3 className="project-title">
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
            </h3>
            <p className="project-desc">{p.desc}</p>
            <ul className="tech-list">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="外部链接">
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
