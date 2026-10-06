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
            <span className="hidden sm:inline text-[#0057b8]">通常会在 24 小时内回复邮件</span>
          </div>
        </div>

        <div className="p-6 md:p-12 lg:p-16">
          <span className="text-xs font-mono text-[#0057b8] tracking-widest uppercase font-semibold">
            技术探讨 · 灵感碰撞 · JUST SAY HI
          </span>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#000000] leading-tight text-balance">
            很高兴认识你。
          </h2>

          <p className="mt-6 text-base font-sans text-[#525252] leading-relaxed max-w-2xl font-light">
            无论是前端架构、微前端、AI Agent 工程化的技术探讨，还是好玩想法的灵感分享，或者只是路过打个招呼（Just say hi），都非常欢迎发邮件联系。
          </p>

          <div className="mt-10 p-6 md:p-8 bg-[#f8f8f8] border border-[#e5e5e5]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#737373]">
                  电子邮箱 (Email) · 直达个人收件箱
                </div>
                <a
                  href={`mailto:${PORTFOLIO_METADATA.email}`}
                  className="block font-serif text-2xl sm:text-3xl md:text-4xl text-[#000000] hover:text-[#0057b8] transition-colors tracking-tight"
                >
                  {PORTFOLIO_METADATA.email}
                </a>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`mailto:${PORTFOLIO_METADATA.email}`}
                  className="px-4 py-2.5 bg-[#000000] text-[#ffffff] hover:bg-[#222222] text-xs font-mono transition-colors"
                >
                  写邮件 ↗
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 border border-[#e5e5e5] hover:border-[#000000] bg-[#ffffff] text-xs font-mono transition-colors cursor-pointer"
                >
                  {copiedEmail ? '已复制 ✓' : '复制邮箱'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
