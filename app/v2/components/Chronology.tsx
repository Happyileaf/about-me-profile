"use client";


import React, { useState } from 'react';
import { EXPERIENCES } from '../lib/portfolioData';

export const Chronology: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    EXPERIENCES.forEach(e => { all[e.id] = true; });
    setExpandedIds(all);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const allExpanded = Object.keys(expandedIds).length === EXPERIENCES.length && Object.values(expandedIds).every(Boolean);

  return (
    <section 
      id="experience" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节顶部导航条 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center justify-between">
            <span className="text-xs font-mono text-[#525252]">
              第 04 节 / 经历
            </span>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 flex flex-wrap items-center justify-between text-xs font-mono text-[#737373] gap-2">
            <span>杭州 / 北京 · 2021 — 2026</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={allExpanded ? collapseAll : expandAll}
                className="hover:text-[#000000] text-xs font-mono text-[#525252] underline decoration-[#e5e5e5] hover:decoration-[#000000] cursor-pointer"
              >
                {allExpanded ? '全部收起 [-]' : '全部展开 [+]'}
              </button>
            </div>
          </div>
        </div>

        {/* 履历年表列表 */}
        <div className="divide-y divide-[#e5e5e5]">
          {EXPERIENCES.map((exp) => {
            const isExpanded = !!expandedIds[exp.id];

            return (
              <div 
                key={exp.id}
                className="transition-colors hover:bg-[#fafafa]"
              >
                {/* 主行头部 */}
                <div 
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start cursor-pointer group"
                >
                  {/* 时间周期与地点 (3 列) */}
                  <div className="md:col-span-3 text-xs font-mono">
                    <div className="text-[#000000] font-semibold tabular-nums">
                      {exp.period}
                    </div>
                    <div className="text-[#737373] mt-1.5 flex items-center gap-2">
                      <span>{exp.location}</span>
                      {exp.status === 'ACTIVE' && (
                        <>
                          <span className="text-[#a3a3a3]">·</span>
                          <span className="text-[#ff0000] font-bold">[当前在任]</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* 机构与岗位 (5 列) */}
                  <div className="md:col-span-5 space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#000000] tracking-tight leading-tight">
                        {exp.organization}
                      </h3>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-[11px] font-mono text-[#0057b8] hover:underline shrink-0"
                        >
                          [官网 ↗]
                        </a>
                      )}
                    </div>
                    <div className="text-sm font-sans text-[#0057b8] font-medium">
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  {/* 展开指示 (4 列) */}
                  <div className="md:col-span-4 flex items-center justify-end text-xs font-mono text-[#525252]">
                    <button 
                      type="button"
                      className="px-2.5 py-1 border border-[#e5e5e5] group-hover:border-[#000000] text-xs font-mono transition-colors shrink-0 cursor-pointer"
                    >
                      {isExpanded ? '[收起详情 -]' : '[展开详情 +]'}
                    </button>
                  </div>
                </div>

                {/* 展开的成果详情 */}
                {isExpanded && (
                  <div className="px-6 md:px-8 pb-8 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#f8f8f8] border-t border-[#e5e5e5] animate-in fade-in duration-150">
                    <div className="md:col-span-3 text-xs font-mono text-[#737373] space-y-3">
                      <div>
                        <span className="uppercase block mb-1 font-semibold text-[#000000]">归档编号</span>
                        <span>RECORD: {exp.id.toUpperCase()}</span>
                      </div>
                      {exp.techStack && exp.techStack.length > 0 && (
                        <div>
                          <span className="uppercase block mb-1.5 font-semibold text-[#000000]">主导技术 / 领域</span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.techStack.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-1.5 py-0.5 bg-[#ffffff] border border-[#e5e5e5] text-[11px] text-[#525252]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-9 space-y-4">
                      {exp.description && (
                        <p className="text-xs font-sans text-[#737373] leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      <div className="pt-2 border-t border-[#e5e5e5]">
                        <ul className="space-y-2 text-xs font-sans text-[#525252]">
                          {exp.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 leading-relaxed">
                              <span className="text-[#0057b8] font-mono shrink-0 font-bold">—</span>
                              <span className="text-[#262626]">{item}</span>
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
