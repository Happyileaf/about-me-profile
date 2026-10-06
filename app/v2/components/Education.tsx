"use client";


import React from 'react';
import { EDUCATIONS } from '../lib/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节顶部导航条 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center justify-between">
            <span className="text-xs font-mono text-[#525252]">
              第 05 节 / 教育
            </span>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>计算机科学与技术全日制本科教育 · 学术与理论基座</span>
          </div>
        </div>

        {/* 教育内容区块 */}
        <div className="divide-y divide-[#e5e5e5]">
          {EDUCATIONS.map((edu) => (
            <div 
              key={edu.id}
              className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#fafafa] transition-colors"
            >
              {/* 时间与地点 (3 列) */}
              <div className="md:col-span-3 text-xs font-mono space-y-1">
                <div className="text-[#000000] font-semibold tabular-nums">
                  {edu.period}
                </div>
                <div className="text-[#737373]">
                  {edu.location}
                </div>
              </div>

              {/* 学校与专业学位 (5 列) */}
              <div className="md:col-span-5 space-y-1.5">
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#000000] tracking-tight leading-tight">
                  {edu.organization}
                </h3>
                <div className="text-sm font-sans text-[#0057b8] font-medium">
                  {edu.role}
                </div>
                {edu.description && (
                  <p className="text-xs font-sans text-[#737373] pt-1 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>

              {/* 列表要点 (4 列) */}
              <div className="md:col-span-4 text-xs font-sans">
                <ul className="space-y-2 text-[#525252]">
                  {edu.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#0057b8] font-mono shrink-0 font-bold">—</span>
                      <span className="text-[#262626]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
