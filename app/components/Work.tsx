import Reveal from "@/app/components/Reveal";
import { GithubIcon, ExternalLinkIcon } from "@/app/components/icons";

type Project = {
  code: string;
  tag: string;
  title: string;
  href: string;
  desc: string;
  tech: string[];
  github?: string;
  status?: "design";
  reverse?: boolean;
};

const PROJECTS: Project[] = [
  {
    code: "// project-01",
    tag: "Featured Project",
    title: "Bookmark Lite 轻量书签管理平台",
    href: "https://bookmark-lite.contextlab.top/bookmarks",
    desc: "集 Web 平台、浏览器扩展与 MCP Server 于一体的轻量书签管理平台。支持多标签分类、收藏 / 回收站、导入导出、公共与个人双库，通过 Chrome 扩展一键收藏并同步原生书签，并以 MCP 工具把书签能力接入 Claude、Cursor 等 AI 客户端。",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "MCP"],
    github: "https://github.com/Happyileaf/bookmark-lite",
  },
  {
    code: "// project-02",
    tag: "Featured Project",
    title: "About Me Profile 个人主页",
    href: "https://www.happyhaoya.top/",
    desc: "个人主页，展示个人经历、项目经历、技能等。",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Happyileaf/about-me-profile",
    reverse: true,
  },
  {
    code: "// project-03",
    tag: "In Design",
    title: "Lumen · 摄影作品展示平台",
    href: "",
    desc: "面向独立摄影师的作品集平台。以瀑布流与全屏灯箱呈现作品，支持按专辑 / 标签 / EXIF 信息组织浏览；内置暗色影棚级主题、自适应图像与懒加载，访客可在沉浸式阅读视图中查看拍摄参数、地点与创作手记。",
    tech: ["Next.js", "TypeScript", "Tailwind", "Three.js", "PostgreSQL"],
    status: "design",
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
            <p className={`project-tag${p.status === "design" ? " is-design" : ""}`}>
              {p.tag}
            </p>
            <h3 className="project-title">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            {p.href.startsWith("http") ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-url"
              >
                <ExternalLinkIcon />
                {new URL(p.href).hostname}
              </a>
            ) : null}
            <p className="project-desc">{p.desc}</p>
            <ul className="tech-list">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-links">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
              ) : null}
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label="外部链接">
                  <ExternalLinkIcon />
                </a>
              ) : null}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
