import { PROJECTS } from '../lib/portfolioData';

export const Works = () => {
  return (
    <section id="works" className="border-b border-[#e5e5e5] bg-[#ffffff]">
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 px-6 py-4 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center gap-3">
            <span className="text-sm font-mono text-[#737373] tabular-nums shrink-0">
              04
            </span>
            <h2 className="font-sans text-lg md:text-xl font-normal leading-7 text-[#000000]">
              作品
            </h2>
          </div>
          <div className="md:col-span-8 px-6 py-4 flex items-center text-xs md:text-sm font-mono text-[#737373]">
            <span>个人项目与开源实践 · 设计、全栈开发与部署</span>
          </div>
        </div>

        <div className="divide-y divide-[#e5e5e5]">
          {PROJECTS.map((project, index) => {
            const isDesign = project.tag === 'In Design';

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 md:p-8 transition-colors hover:bg-[#fafafa]"
              >
                <div className="md:col-span-3 flex md:flex-col items-start gap-2 text-xs font-mono">
                  <span className="text-[#ff0000] font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={isDesign ? 'text-[#6c3b00]' : 'text-[#737373]'}>
                    {project.tag}
                  </span>
                </div>

                <div className="md:col-span-6 space-y-3">
                  <h3 className="font-serif text-2xl font-normal text-[#000000] mb-2">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0057b8] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm font-sans text-[#525252] leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="text-xs font-mono text-[#000000] flex flex-wrap items-center gap-x-2 gap-y-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={tech} className="flex items-center gap-x-2">
                        <span className="hover:text-[#0057b8] transition-colors">{tech}</span>
                        {techIndex < project.tech.length - 1 && (
                          <span className="text-[#a3a3a3]" aria-hidden="true">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex md:justify-end items-start gap-3 text-xs font-mono">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 border border-[#e5e5e5] text-[#525252] hover:text-[#000000] hover:border-[#000000] transition-colors"
                    >
                      仓库 ↗
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-[#000000] text-[#ffffff] hover:bg-[#222222] transition-colors"
                    >
                      访问 ↗
                    </a>
                  )}
                  {isDesign && (
                    <span className="px-3 py-2 border border-dashed border-[#e5e5e5] text-[#a3a3a3]">
                      设计中
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
