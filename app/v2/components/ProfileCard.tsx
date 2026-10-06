"use client";


import React, { useState } from 'react';
import { PORTFOLIO_METADATA } from '../lib/portfolioData';

export const ProfileCard: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_METADATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="bg-[#ffffff]">
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* Row 1: 顶部 5 个极简图标按钮行 (更紧凑的上下边距，横向与外边框对齐) */}
        <div className="px-6 py-3.5 md:px-8 md:py-4 flex items-center gap-2">
          <a
            href={PORTFOLIO_METADATA.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="X (formerly Twitter)"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          <a
            href={PORTFOLIO_METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="GitHub Profile"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.017-.868-.027-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.258-1.11-1.594-1.11-1.594-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="LinkedIn"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="Discord"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.7 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.373-.287a.075.075 0 0 1 .078-.01 13.84 13.84 0 0 0 12.152 0 .075.075 0 0 1 .079.01c.12.098.246.195.373.288a.077.077 0 0 1-.006.127c-.598.349-1.227.647-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="YouTube"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* 占满 100% 容器边界的物理分割线 */}
        <div className="border-t border-[#e5e5e5]" />

        {/* Row 2: 下方 2 栏网格名片区域 (上下更紧凑) */}
        <div className="px-6 py-4.5 md:px-8 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-y-3.5 gap-x-6 text-xs font-mono">
          {/* 左列信息条 (调整为 5 列宽度，使分割线与右边内容显著收拢靠近) */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </span>
              <span className="text-[#262626]">
                Full-Stack Engineer <strong className="font-semibold text-[#000000]">{PORTFOLIO_METADATA.handle}</strong>
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </span>
              <span className="text-[#262626]">
                Web Architect <strong className="font-semibold text-[#000000]">@byai</strong>
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span className="text-[#262626]">
                {PORTFOLIO_METADATA.location}
              </span>
            </div>

            <div
              onClick={handleCopyEmail}
              className="flex items-center gap-2.5 cursor-pointer group"
              title="点击复制邮箱"
            >
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] group-hover:border-[#000000] rounded-md flex items-center justify-center shrink-0 text-[#262626] transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span className="text-[#262626] group-hover:text-[#0057b8] transition-colors">
                {copiedEmail ? 'happyaihaoya@gmail.com (已复制 ✓)' : PORTFOLIO_METADATA.email}
              </span>
            </div>
          </div>

          {/* 右列信息条 (调整为 5 列，紧跟左列并移除底部对齐，顶对齐更自然) */}
          <div className="md:col-span-5 space-y-2 md:border-l md:border-dashed md:border-[#e5e5e5] md:pl-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <div className="text-[#262626]">
                <span>LIVE UTC</span> <span className="text-[#a3a3a3]">// Hangzhou (UTC+8)</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span className="text-[#262626]">
                +86 (Hangzhou / Remote)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部物理分割线，占满整个宽度，与作品模块分隔 */}
      <div className="border-t border-[#e5e5e5]" />
    </section>
  );
};
