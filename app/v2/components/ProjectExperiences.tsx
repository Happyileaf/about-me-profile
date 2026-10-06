"use client";


import React, { useState } from 'react';
import { PROJECT_EXPERIENCES } from '../lib/portfolioData';

export const ProjectExperiences: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string>('ALL');
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const allTags = ['ALL', ...Array.from(new Set(PROJECT_EXPERIENCES.map(p => p.tag)))];

  const filteredProjects = PROJECT_EXPERIENCES.filter(p => {
    if (activeTag === 'ALL') return true;
    return p.tag === activeTag;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    PROJECT_EXPERIENCES.forEach(p => { all[p.id] = true; });
    setExpandedProjects(all);
  };

  const collapseAll = () => {
    setExpandedProjects({});
  };

  return (
    <section 
      id="project" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节顶部导航条 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center justify-between">
            <span className="text-xs font-mono text-[#525252]">
              第 02 节 / 项目
            </span>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] gap-2">
            <span>工程实战 </span>
          </div>
        </div>

        {/* 筛选与控制栏 */}
        <div className="px-6 md:px-8 py-3.5 border-b border-[#e5e5e5] bg-[#fcfcfc] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[#737373] mr-1 hidden sm:inline">领域标签:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-2.5 py-1 transition-colors cursor-pointer ${
                  activeTag === tag
                    ? 'bg-[#000000] text-[#ffffff] font-medium'
                    : 'text-[#525252] hover:bg-[#e5e5e5]'
                }`}
              >
                {tag === 'ALL' ? `全部 [${PROJECT_EXPERIENCES.length}]` : tag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-[#737373] text-xs">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-[#000000] underline decoration-[#e5e5e5] hover:decoration-[#000000] cursor-pointer"
            >
              全部展开
            </button>
            <span className="text-[#e5e5e5]">/</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-[#000000] underline decoration-[#e5e5e5] hover:decoration-[#000000] cursor-pointer"
            >
              全部收起
            </button>
          </div>
        </div>

        {/* 重点项目卡片列表 */}
        <div className="divide-y divide-[#e5e5e5]">
          {filteredProjects.map((project) => {
            const isExpanded = !!expandedProjects[project.id];

            return (
              <div 
                key={project.id}
                className="transition-colors hover:bg-[#fafafa]"
              >
                {/* 项目头部概览行 */}
                <div 
                  onClick={() => toggleExpand(project.id)}
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-5 items-start cursor-pointer group"
                >
                  {/* 项目编号、周期与标签 (3 列) */}
                  <div className="md:col-span-3 text-xs font-mono space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#000000]">PROJ. {project.index}</span>
                      <span className="text-[#a3a3a3]">/</span>
                      <span className="text-[#0057b8] font-medium">[{project.tag}]</span>
                    </div>
                    <div className="text-[#525252] tabular-nums font-semibold">
                      {project.period}
                    </div>
                    <div className="text-[#737373] flex items-center gap-2 pt-0.5">
                      <span>{project.domain}</span>
                    </div>
                  </div>

                  {/* 项目名称与角色 (5 列) */}
                  <div className="md:col-span-5 space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#000000] group-hover:text-[#0057b8] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#0057b8]">
                      职责角色: {project.role}
                    </div>
                    <p className="text-xs font-sans text-[#737373] line-clamp-2 pt-1 leading-relaxed">
                      {project.intro}
                    </p>
                  </div>

                  {/* 技术栈摘要与操作按钮 (4 列) */}
                  <div className="md:col-span-4 flex flex-col justify-between items-end text-xs font-mono h-full gap-3">
                    <div className="flex flex-wrap justify-end gap-1.5 max-w-xs">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-1.5 py-0.5 bg-[#f0f0f0] text-[#525252] border border-[#e5e5e5] text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[#737373] text-[11px]">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <button 
                      type="button"
                      className="px-2.5 py-1 border border-[#e5e5e5] group-hover:border-[#000000] text-xs font-mono transition-colors shrink-0 cursor-pointer"
                    >
                      {isExpanded ? '[收起工程细节 -]' : '[展开工程细节 +]'}
                    </button>
                  </div>
                </div>

                {/* 展开的深度工程细节 */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#f8f8f8] border-t border-[#e5e5e5] animate-in fade-in duration-150">
                    {/* 左侧技术栈与系统标识 (4 列) */}
                    <div className="md:col-span-4 space-y-4 text-xs font-mono text-[#525252]">
                      <div>
                        <span className="text-[#000000] font-semibold uppercase block mb-1">项目定位与副标题</span>
                        <p className="font-sans text-[#737373] leading-relaxed">{project.subtitle}</p>
                      </div>

                      <div>
                        <span className="text-[#000000] font-semibold uppercase block mb-2">全套技术栈 / 依赖工具</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-[#ffffff] border border-[#e5e5e5] text-[#000000] text-[11px]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {project.achievements && project.achievements.length > 0 && (
                        <div className="p-3 bg-[#ffffff] border border-[#e5e5e5] space-y-1.5">
                          <span className="text-[#0057b8] font-semibold uppercase block text-[11px]">
                            核心量化 / 交付亮点
                          </span>
                          <ul className="space-y-1 text-xs font-sans text-[#525252]">
                            {project.achievements.map((ach, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-[#0057b8] font-mono">✓</span>
                                <span>{ach}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* 右侧核心工程落地要点 (8 列) */}
                    <div className="md:col-span-8 space-y-4">
                      <div>
                        <span className="text-[11px] font-mono text-[#737373] uppercase mb-1.5 font-semibold block">
                          项目背景与目标
                        </span>
                        <p className="text-sm font-sans text-[#262626] leading-relaxed">
                          {project.intro}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#e5e5e5]">
                        <div className="text-[11px] font-mono text-[#737373] uppercase mb-3 font-semibold flex items-center justify-between">
                          <span>具体工程落地、架构职责与技术举措:</span>
                          <span className="text-[#a3a3a3]">共 {project.responsibilities.length} 项要点</span>
                        </div>
                        <ul className="space-y-2.5 text-xs font-sans text-[#000000]">
                          {project.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 leading-relaxed bg-[#ffffff] p-3 border border-[#e5e5e5]/80">
                              <span className="text-[#0057b8] font-mono font-bold shrink-0 mt-0.5">
                                [{(idx + 1).toString().padStart(2, '0')}]
                              </span>
                              <span className="text-[#262626] font-normal">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
