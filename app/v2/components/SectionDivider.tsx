"use client";


import React from 'react';

export const SectionDivider: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="border-b border-[#e5e5e5] bg-[#f8f8f8] text-[11px] font-mono overflow-hidden select-none"
    >
      <div className="max-w-[1080px] mx-auto px-4 md:px-8 py-1.5 border-x border-[#e5e5e5] flex items-center justify-between whitespace-nowrap overflow-hidden min-h-[30px]">
        {/* 严格保持与顶部状态副栏完全同高、同盒模型的透明占位 */}
        <span className="invisible select-none">00:00:00 UTC</span>
      </div>
    </div>
  );
};
