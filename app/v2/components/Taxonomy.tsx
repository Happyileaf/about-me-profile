"use client";


import React, { useState } from 'react';
import { TECH_STACK_GROUPS } from '../lib/portfolioData';

export const Taxonomy: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section 
      id="taxonomy" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节顶部导航条 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 px-6 py-4 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center gap-3">
            <span className="text-sm font-mono text-[#737373] tabular-nums shrink-0">
              03
            </span>
            <h2 className="font-sans text-lg md:text-xl font-normal leading-7 text-[#000000]">
              技术栈
            </h2>
          </div>
          <div className="md:col-span-8 px-6 py-4 flex items-center text-xs md:text-sm font-mono text-[#737373]">
            <span>全栈技术架构与工程能力矩阵</span>
          </div>
        </div>

        {/* 左右分布列表: 左侧为序号与技术方向 (3列)，右侧为具体技术 (9列)，不与顶部栏 4/8 分割硬对齐 */}
        <div className="divide-y divide-[#e5e5e5]">
          {TECH_STACK_GROUPS.map((group) => (
            <div 
              key={group.id}
              className="grid grid-cols-1 lg:grid-cols-12 hover:bg-[#fafafa] transition-colors"
            >
              {/* 左侧 (3 列): 序号与方向标题，右侧带垂直网格线 */}
              <div className="lg:col-span-3 pl-6 md:pl-8 pr-3 py-3 border-b lg:border-b-0 lg:border-r border-[#e5e5e5] flex items-center gap-2.5 shrink-0">
                <span className="font-mono text-sm font-medium text-[#737373] leading-tight">
                  {group.index}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-medium text-[#000000] tracking-tight leading-tight">
                  {group.title}
                </h3>
              </div>

              {/* 右侧 (9 列): 具体技术栈 Chips */}
              <div className="lg:col-span-9 pl-6 md:pl-8 pr-3 py-3 flex flex-wrap items-center gap-1.5">
                {group.items.map((tech) => {
                  const isTechActive = activeTech === tech.name;

                  return (
                    <button
                      key={tech.name}
                      type="button"
                      onClick={() => setActiveTech(isTechActive ? null : tech.name)}
                      className={`px-2.5 py-1 text-[11px] font-mono transition-all cursor-pointer flex items-center gap-1.5 border ${
                        isTechActive
                          ? 'bg-[#000000] text-[#ffffff] border-[#000000] font-semibold'
                          : 'bg-[#ffffff] text-[#262626] border-[#e5e5e5] hover:border-[#000000] hover:bg-[#000000] hover:text-[#ffffff]'
                      }`}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full inline-block shrink-0 border border-black/10"
                        style={{ 
                          backgroundColor: isTechActive 
                            ? '#ffffff' 
                            : (!tech.color || tech.color.toLowerCase() === '#ffffff' || tech.color.toLowerCase() === '#fff' ? '#000000' : tech.color) 
                        }}
                      />
                      <span>{tech.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
