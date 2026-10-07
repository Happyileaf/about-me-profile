"use client";


import React, { useState } from 'react';
import { FIELD_NOTES } from '../lib/portfolioData';
import { FieldNote } from '../types/portfolio';
import { DispatchReaderModal } from './DispatchReaderModal';

export const FieldNotes: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<FieldNote | null>(null);

  return (
    <section 
      id="notes" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节顶部导航条 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 px-6 py-4 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center gap-3">
            <span className="text-sm font-mono text-[#737373] tabular-nums shrink-0">
              06
            </span>
            <h2 className="font-sans text-lg md:text-xl font-normal leading-7 text-[#000000]">
              笔记
            </h2>
          </div>
          <div className="md:col-span-8 px-6 py-4 flex items-center text-xs md:text-sm font-mono text-[#737373]">
            <span>理论随笔</span>
          </div>
        </div>

        {/* 3 列现代专著排版网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5]">
          {FIELD_NOTES.map((note) => (
            <article 
              key={note.id}
              onClick={() => setSelectedNote(note)}
              className="p-6 md:p-10 flex flex-col justify-between group hover:bg-[#fafafa] transition-colors cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#525252]">
                  <span className="text-[#ff0000] font-bold">{note.dispatchNumber}</span>
                  <span>{note.date}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-normal text-[#000000] group-hover:text-[#0057b8] transition-colors leading-snug">
                    {note.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#525252]">
                    {note.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm font-sans text-[#525252] leading-relaxed line-clamp-3 font-light">
                  {note.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e5e5e5] flex items-center justify-between text-xs font-mono text-[#737373]">
                <span>{note.readTime}</span>
                <span className="group-hover:text-[#000000] transition-colors font-semibold">
                  阅读专论 ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 专论阅读弹窗 */}
      <DispatchReaderModal
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />
    </section>
  );
};
