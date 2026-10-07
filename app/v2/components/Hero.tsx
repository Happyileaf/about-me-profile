"use client";

import React, { useState } from 'react';
import { PORTFOLIO_METADATA } from '../lib/portfolioData';
import RotatingText from './rotating-text';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="top"
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 顶部档案索引栏 (Top Ledger Strip) */}
        <div className="px-4 md:px-8 py-3 border-b border-[#e5e5e5] flex flex-wrap items-center justify-between text-xs font-mono text-[#525252] gap-2">
          <div className="flex items-center gap-3">
            <span className="text-[#000000] font-semibold">关于</span>
            <span className="text-[#a3a3a3]">/</span>
            <span>SPEC.2026.FULLSTACK</span>
          </div>
        </div>

        {/* 上方内容区域：轮播主张（右上角，与左下角头像形成对角平衡） */}
        <div className="min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[340px] border-b border-[#e5e5e5] flex items-center justify-end">
          <div className="px-4 md:px-8 py-8 sm:py-10 max-w-full">
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#000000] leading-[1.15] tracking-tight flex flex-wrap items-center justify-end gap-x-3 gap-y-2">
              <span className="shrink-0">用代码构建</span>
              <RotatingText
                texts={['优雅的界面。', '可靠的系统。', '极速的体验。', '有趣的事物。']}
                mainClassName="bg-[#000000] text-[#ffffff] px-2 sm:px-3 md:px-4 justify-center"
                splitLevelClassName="overflow-hidden pb-[2px] sm:pb-1"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2400}
              />
            </h2>
          </div>
        </div>

        {/* 下方内容区域：左圆形头像 + 右侧三个模块 */}
        <div className="grid grid-cols-1 md:grid-cols-[164px_1fr]">
          {/* 左侧：圆形头像区 — 160px 头像 + 2px 边距 = 164px 正方形 */}
          <div className="w-[164px] h-[164px] border-b border-[#e5e5e5] md:border-b-0 md:border-r border-[#e5e5e5]">
            <div className="w-full h-full p-0.5">
              {!imgFailed ? (
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#f0f0f0] border border-[#e5e5e5]">
                  <img
                    src="https://avatars.githubusercontent.com/u/55348037?v=4"
                    alt="好呀 — 头像"
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-[#f0f0f0] flex flex-col items-center justify-center text-xs font-mono text-[#525252] border border-[#e5e5e5]">
                  <span className="font-serif text-2xl text-[#000000] mb-1">
                    {PORTFOLIO_METADATA.author}
                  </span>
                  <span className="text-[10px]">全栈工程师</span>
                </div>
              )}
            </div>
          </div>

          {/* 右侧：三个横向模块，高度比例 2:1:1，总高 164px */}
          <div className="h-[164px] flex flex-col">
            {/* 模块 1：空白 */}
            <div className="flex-[2] flex items-center justify-end border-b border-[#e5e5e5]">
              <div className="px-4 w-full">
              </div>
            </div>

            {/* 模块 2：名称 */}
            <div className="flex-[1] flex items-center border-b border-[#e5e5e5]">
              <h1 className="px-4 font-sans text-2xl sm:text-3xl md:text-[32px] font-bold text-[#000000] leading-none tracking-tight -translate-y-[1px]">
                {PORTFOLIO_METADATA.author}
              </h1>
            </div>

            {/* 模块 3：notes */}
            <div className="flex-[1] flex items-center">
              <div className="px-4 -translate-y-[1px]">
                <div className="font-mono text-sm text-[#525252] tracking-wide">
                  永远年轻，永远热泪盈眶。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
