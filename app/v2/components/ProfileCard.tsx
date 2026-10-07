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
        {/* Row 1: 顶部极简图标按钮行 (更紧凑的上下边距，横向与外边框对齐) */}
        <div className="px-6 py-3.5 md:px-8 md:py-4 flex items-center gap-2">
          <a
            href={PORTFOLIO_METADATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="GitHub Profile"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.017-.868-.027-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.258-1.11-1.594-1.11-1.594-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={PORTFOLIO_METADATA.juejin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="稀土掘金"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 14.316 7.454-5.88-2.022-1.625L12 11.1l-.004.003-5.432-4.288-2.02 1.624 7.452 5.88Zm0-7.247 2.89-2.298L12 2.453l-.004-.005-2.884 2.318 2.884 2.3Zm0 11.266-.005.002-9.975-7.87L0 12.088l.194.156 11.803 9.308 7.463-5.885L24 12.085l-2.023-1.624Z" />
            </svg>
          </a>

          <a
            href={PORTFOLIO_METADATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            href={PORTFOLIO_METADATA.codesandbox}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8.5 h-8.5 border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#f5f5f5] hover:border-[#000000] rounded-lg flex items-center justify-center text-[#262626] transition-all cursor-pointer shrink-0"
            title="CodeSandbox"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />
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
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
              </span>
              <span className="text-[#262626]">
                {PORTFOLIO_METADATA.role}
              </span>
            </div>


            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <span className="text-[#262626]">
                {PORTFOLIO_METADATA.location}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={`mailto:${PORTFOLIO_METADATA.email}`}
                className="flex items-center gap-2.5 group"
                title="点击发送邮件"
              >
                <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] group-hover:border-[#000000] rounded-md flex items-center justify-center shrink-0 text-[#262626] transition-colors">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </span>
                <span className="text-[#262626] group-hover:text-[#0057b8] transition-colors">
                  {PORTFOLIO_METADATA.email}
                </span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title={copiedEmail ? '已复制' : '复制邮箱'}
                className="w-3.5 h-3.5 flex items-center justify-center shrink-0 text-[#a3a3a3] hover:text-[#000000] transition-colors"
              >
                {copiedEmail ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                )}
              </button>
            </div>
          </div>

          {/* 右列信息条 (调整为 5 列，紧跟左列并移除底部对齐，顶对齐更自然) */}
          <div className="md:col-span-5 space-y-2 md:border-l md:border-dashed md:border-[#e5e5e5] md:pl-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] rounded-md flex items-center justify-center shrink-0 text-[#262626]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </span>
              <div className="text-[#262626]">
                <span>OPEN TO WORK</span> <span className="text-[#a3a3a3]">{'//'} AI Product &amp; Freelance</span>
              </div>
            </div>

            <a
              href={PORTFOLIO_METADATA.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 group"
              title="获取简历 PDF"
            >
              <span className="w-6.5 h-6.5 border border-[#e5e5e5] bg-[#f8f8f8] group-hover:border-[#000000] rounded-md flex items-center justify-center shrink-0 text-[#262626] transition-colors">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>
              </span>
              <span className="text-[#262626] group-hover:text-[#0057b8] transition-colors">
                简历 PDF
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 底部物理分割线，占满整个宽度，与作品模块分隔 */}
      <div className="border-t border-[#e5e5e5]" />
    </section>
  );
};
