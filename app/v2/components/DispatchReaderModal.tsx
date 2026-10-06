"use client";


import React, { useEffect } from 'react';
import { FieldNote } from '../types/portfolio';

interface DispatchReaderModalProps {
  note: FieldNote | null;
  onClose: () => void;
}

export const DispatchReaderModal: React.FC<DispatchReaderModalProps> = ({ note, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (note) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [note, onClose]);

  if (!note) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#000000]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl max-h-[90vh] bg-[#ffffff] text-[#000000] border border-[#000000] flex flex-col shadow-2xl overflow-hidden animate-in fade-in duration-150">
        {/* 顶部栏 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e5e5] bg-[#f8f8f8] text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#ff0000] font-bold">{note.dispatchNumber}</span>
            <span className="text-[#737373]">·</span>
            <span className="text-[#737373]">{note.date}</span>
            <span className="text-[#737373]">·</span>
            <span className="text-[#737373]">{note.readTime}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono border border-[#e5e5e5] bg-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] transition-colors cursor-pointer"
          >
            [ESC / 关闭]
          </button>
        </div>

        {/* 滚动长文 */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          <div className="space-y-3 pb-6 border-b border-[#e5e5e5]">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#000000] font-normal leading-tight text-balance">
              {note.title}
            </h2>
            <p className="font-serif italic text-lg text-[#525252]">
              {note.subtitle}
            </p>
            <div className="pt-2 text-xs font-mono text-[#737373] flex flex-wrap gap-x-2">
              <span className="text-[#000000] font-semibold">专论主题分类:</span>
              {note.tags.map((t, idx) => (
                <React.Fragment key={t}>
                  <span className="text-[#0057b8]">{t}</span>
                  {idx < note.tags.length - 1 && <span>/</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 正文段落 */}
          <div className="space-y-4 text-sm sm:text-base font-sans text-[#262626] leading-relaxed">
            {note.content.map((paragraph, pIdx) => (
              <p key={pIdx}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* 文末收执署名 */}
          <div className="pt-8 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>好呀 执笔撰写与归档</span>
            <span className="text-[#6c3b00]">系统工程档案 · 极客随笔</span>
          </div>
        </div>

        {/* 底部 */}
        <div className="px-6 py-3 border-t border-[#e5e5e5] bg-[#f8f8f8] flex items-center justify-between text-xs font-mono">
          <span className="text-[#737373]">专论阅读完毕</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-[#000000] text-[#ffffff] hover:bg-[#222222] transition-colors cursor-pointer"
          >
            关闭专论
          </button>
        </div>
      </div>
    </div>
  );
};
