"use client";

import React, { useState } from 'react';
import { PORTFOLIO_METADATA } from '../lib/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_METADATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center justify-between">
            <span className="text-xs font-mono text-[#525252]">
              第 07 节 / 联络
            </span>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>很高兴认识你 · 欢迎交流探讨</span>
            <span className="hidden sm:inline text-[#0057b8]"></span>
          </div>
        </div>

        <div className="p-6 md:p-12 lg:p-16">
          <span className="text-xs font-mono text-[#0057b8] tracking-widest uppercase font-semibold">
            JUST SAY HI
          </span>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#000000] leading-tight text-balance">
            很高兴认识你。
          </h2>

          <p className="mt-6 text-base font-sans text-[#525252] leading-relaxed max-w-xl font-light">
            无论是技术交流，还是好玩想法，或者只是路过打个招呼（Just say hi），都非常欢迎发邮件联系。通常会在 24 小时内回复邮件。
          </p>

          <div className="mt-10 p-6 md:p-8 bg-[#f8f8f8] border border-[#e5e5e5]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#737373]">
                  电子邮箱 (Email)
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_METADATA.email}`}
                    className="font-serif text-lg sm:text-xl md:text-2xl text-[#000000] hover:text-[#0057b8] transition-colors tracking-tight"
                  >
                    {PORTFOLIO_METADATA.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title={copiedEmail ? '已复制' : '复制邮箱'}
                    className="w-6.5 h-6.5 border border-[#e5e5e5] hover:border-[#000000] bg-[#ffffff] rounded-md flex items-center justify-center shrink-0 text-[#525252] hover:text-[#000000] transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ) : (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`mailto:${PORTFOLIO_METADATA.email}`}
                  className="inline-flex items-center justify-center min-w-[92px] px-4 py-2.5 bg-[#000000] text-[#ffffff] hover:bg-[#222222] text-xs font-mono transition-colors"
                >
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
