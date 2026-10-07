"use client";


import React from 'react';
import { PORTFOLIO_METADATA, COLOPHON_DATA } from '../lib/portfolioData';

interface ColophonFooterProps {
  onToggleGridGuide: () => void;
  gridGuideActive: boolean;
}

export const ColophonFooter: React.FC<ColophonFooterProps> = ({
  onToggleGridGuide,
  gridGuideActive,
}) => {
  return (
    <footer className="bg-[#000000] text-[#ffffff] border-t border-[#222222]">
      <div className="max-w-[1080px] mx-auto border-x border-[#222222]">
        {/* 底部导航与版权行 */}
        <div className="px-6 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#a3a3a3]">
          {/* 品牌与版权 */}
          <div className="flex items-center gap-3">
            <span className="text-[#ffffff] font-serif text-base">{PORTFOLIO_METADATA.author}</span>
            <span className="text-[#333333]">·</span>
            <span>© {new Date().getFullYear()} 保留所有权利 · 全栈架构规范</span>
          </div>

          {/* 快速导航链接 */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
            <a href="#about" className="hover:text-[#ffffff] transition-colors">
              理念
            </a>
            <a href="#works" className="hover:text-[#ffffff] transition-colors">
              作品
            </a>
            <a href="#project" className="hover:text-[#ffffff] transition-colors">
              项目
            </a>
            <a href="#taxonomy" className="hover:text-[#ffffff] transition-colors">
              技术栈
            </a>
            <a href="#experience" className="hover:text-[#ffffff] transition-colors">
              经历
            </a>
            {/* 笔记模块暂时下线，屏蔽入口
            <a href="#notes" className="hover:text-[#ffffff] transition-colors">
              笔记
            </a>
            */}
            <a href="#contact" className="hover:text-[#ffffff] transition-colors">
              联系
            </a>
            <button
              type="button"
              onClick={onToggleGridGuide}
              className="text-[#ff0000] hover:underline cursor-pointer"
            >
              {gridGuideActive ? '网格标尺 [开]' : '网格标尺 [关]'}
            </button>
          </div>

          {/* 外部节点 */}
          <div className="flex items-center gap-4 text-[#ffffff]">
            <a 
              href={PORTFOLIO_METADATA.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#0057b8] hover:underline"
            >
              GITHUB ↗
            </a>
            <span className="text-[#333333]">/</span>
            <a 
              href={PORTFOLIO_METADATA.dotfilesRepo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#0057b8] hover:underline"
            >
              DOTFILES ↗
            </a>
            <span className="text-[#333333]">/</span>
            <a 
              href={`mailto:${PORTFOLIO_METADATA.email}`}
              className="hover:text-[#0057b8] hover:underline"
            >
              直连邮箱 ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
