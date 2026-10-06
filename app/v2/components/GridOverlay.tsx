"use client";


import React from 'react';

interface GridOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

export const GridOverlay: React.FC<GridOverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* 12-Column Guide Container */}
      <div className="max-w-[1080px] h-full mx-auto px-4 md:px-8 grid grid-cols-4 md:grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i} 
            className="h-full border-x border-[#0057b8]/20 bg-[#0057b8]/[0.02] flex flex-col justify-between py-3 text-[9px] font-mono text-[#0057b8]"
          >
            <div className="flex items-center justify-between px-1">
              <span>第 {String(i + 1).padStart(2, '0')} 栏</span>
              <span className="hidden lg:inline">8.33%</span>
            </div>
            <div className="text-center font-mono opacity-40 text-[8px]">
              +
            </div>
            <div className="flex items-center justify-between px-1">
              <span>基准</span>
              <span className="hidden lg:inline">{String(i * 120)}PX</span>
            </div>
          </div>
        ))}
      </div>

      {/* Baseline Rhythm lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,87,184,0.05)_1px,transparent_1px)] bg-[size:100%_24px] pointer-events-none" />

      {/* Floating indicator tag with close affordance */}
      <div className="pointer-events-auto absolute bottom-6 right-6 bg-[#000000] text-[#ffffff] px-3 py-1.5 text-xs font-mono border border-[#333333] flex items-center gap-3 shadow-xl">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff0000] animate-pulse" />
          <span>瑞士 12 栏网格 / 24PX 纵向行高</span>
        </span>
        <button 
          onClick={onClose}
          className="text-[#a3a3a3] hover:text-[#ffffff] transition-colors ml-2 font-mono text-xs cursor-pointer"
          title="关闭网格标尺"
        >
          [ESC / 关闭]
        </button>
      </div>
    </div>
  );
};
