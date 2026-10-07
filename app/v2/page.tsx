"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GridOverlay } from './components/GridOverlay';
import { Hero } from './components/Hero';
import { ProfileCard } from './components/ProfileCard';
import { Works } from './components/Works';
import { ProjectExperiences } from './components/ProjectExperiences';
import { Taxonomy } from './components/Taxonomy';
import { Chronology } from './components/Chronology';
import { Education } from './components/Education';
// 笔记模块暂时下线：保留组件与数据代码，仅屏蔽入口
// import { FieldNotes } from './components/FieldNotes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import SectionDivider from './components/section-divider';
import { TerminalModal } from './components/TerminalModal';

/** V2 版本首页，瑞士网格风格档案页 */
export default function V2Home() {
  const [gridGuideActive, setGridGuideActive] = useState<boolean>(false);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  const toggleGridGuide = () => {
    setGridGuideActive((prev) => !prev);
  };

  // Global keyboard shortcuts for developer workflow: ~ or ` or Cmd+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is already typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === '`' || e.key === '~' || (e.ctrlKey && e.key === '`') || ((e.metaKey || e.ctrlKey) && e.key === 'k')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="v2-root">
      <div className="min-h-screen bg-[#ffffff] text-[#000000] flex flex-col font-sans selection:bg-[#000000] selection:text-[#ffffff] relative">
        {/* Interactive Swiss Grid Guide Overlay */}
        <GridOverlay
          isVisible={gridGuideActive}
          onClose={() => setGridGuideActive(false)}
        />

        {/* Interactive Monospace Terminal Modal */}
        <TerminalModal
          isOpen={terminalOpen}
          onClose={() => setTerminalOpen(false)}
        />

        {/* Main Top Bar Contract Header */}
        <Header
          gridGuideActive={gridGuideActive}
          onToggleGridGuide={toggleGridGuide}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Primary Editorial Sections Flow */}
        <main className="flex-1">
          <Hero
            onOpenTerminal={() => setTerminalOpen(true)}
          />
          <SectionDivider />
          <ProfileCard />
          <SectionDivider />
          <Chronology />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Taxonomy />
          <SectionDivider />
          <Works />
          <SectionDivider />
          <ProjectExperiences />
          <SectionDivider />
          {/* 笔记模块暂时下线：屏蔽渲染，恢复时取消注释即可
          <FieldNotes />
          <SectionDivider />
          */}
          <Contact />
        </main>

        {/* 底部栏 */}
        <Footer />
      </div>
    </div>
  );
}
