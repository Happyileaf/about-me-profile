"use client";


import React, { useState } from 'react';
import { PORTFOLIO_METADATA } from '../lib/portfolioData';

interface HeaderProps {
  onOpenTerminal: () => void;
  gridGuideActive?: boolean;
  onToggleGridGuide?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: '#top', label: '关于' },
    { href: '#works', label: '作品' },
    { href: '#project', label: '项目' },
    { href: '#taxonomy', label: '技术栈' },
    { href: '#experience', label: '经历' },
    { href: '#education', label: '教育' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e5e5e5] transition-colors">
      {/* 顶部主导航栏 (Top Bar Contract: 严格单行不换行) */}
      <div className="max-w-[1080px] mx-auto px-4 md:px-8 h-15 flex items-center justify-between border-x border-[#e5e5e5]">
        {/* 区块 1: 个人字标 */}
        <a 
          href="#top" 
          className="font-serif text-xl md:text-2xl font-normal tracking-tight text-[#000000] hover:text-[#525252] transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
        >
          <span className="font-semibold">{PORTFOLIO_METADATA.englishName}</span>
        </a>

        {/* 区块 2: 核心导航链接 (单行极简，文字精炼防折行) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-xs font-mono tracking-wider text-[#525252] whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#000000] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#000000] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 区块 3: 核心操作 (保留终端与发送邮件) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenTerminal}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-mono bg-[#000000] text-[#ffffff] hover:bg-[#222222] transition-colors cursor-pointer whitespace-nowrap"
            title="唤起极客终端交互面板 (按 ~ 键随时唤出)"
          >
            终端
          </button>

          <a
            href="#contact"
            className="px-2.5 sm:px-3 py-1.5 text-xs font-mono border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#ffffff] transition-colors cursor-pointer whitespace-nowrap"
            title="跳转到联系区块"
          >
            发送邮件
          </a>

          {/* 移动端菜单折叠按钮 */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden px-2 py-1.5 text-xs font-mono border border-[#e5e5e5] text-[#000000] cursor-pointer"
            aria-label="切换移动端导航"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* 移动端折叠导航抽屉 */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-[1080px] mx-auto border-x border-b border-[#e5e5e5] bg-[#f8f8f8] px-4 py-3 grid grid-cols-2 gap-2 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 border border-[#e5e5e5] bg-[#ffffff] text-[#525252] hover:text-[#000000] hover:border-[#000000] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
