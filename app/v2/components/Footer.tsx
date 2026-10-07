"use client";

import React from 'react';
import { PORTFOLIO_METADATA } from '../lib/portfolioData';
import { TextHoverEffect } from './text-hover-effect';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#ffffff]">
      {/* 元数据行：水平分线占满全宽，内容与竖向边框限制在版心 */}
      <div className="border-b border-[#e5e5e5]">
        <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5] px-6 md:px-8 py-4 flex items-center justify-between text-xs font-mono text-[#737373]">
          <span>{PORTFOLIO_METADATA.author}</span>
          <span>移动光标以揭示色彩</span>
        </div>
      </div>

      {/* 大字签名：入场描边绘制 + 悬停彩色径向揭示 */}
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5] px-4 sm:px-8 md:px-12 py-6 sm:py-10">
        <div className="h-32 sm:h-44 md:h-56 lg:h-64">
          <TextHoverEffect text={PORTFOLIO_METADATA.englishName.toUpperCase()} />
        </div>
      </div>

      {/* 版权行：水平分线占满全宽，内容与竖向边框限制在版心 */}
      <div className="border-t border-[#e5e5e5]">
        <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5] px-6 md:px-8 py-4 flex items-center justify-center text-xs font-mono text-[#737373]">
          <span>© {year} {PORTFOLIO_METADATA.author} · 保留所有权利</span>
        </div>
      </div>
    </footer>
  );
};
