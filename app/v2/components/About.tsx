"use client";


import React from 'react';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="border-b border-[#e5e5e5] bg-[#ffffff]"
    >
      <div className="max-w-[1080px] mx-auto border-x border-[#e5e5e5]">
        {/* 章节标题横幅 */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#e5e5e5]">
          <div className="md:col-span-4 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#e5e5e5] flex items-center justify-between">
            <span className="text-xs font-mono text-[#525252]">
              第 01 节 / 理念
            </span>
          </div>
          <div className="md:col-span-8 p-6 md:p-8 flex items-center justify-between text-xs font-mono text-[#737373]">
            <span>端到端闭环 · 从数据库持久化直达像素级用户交互</span>
            <span className="hidden sm:inline text-[#0057b8]">架构对称 / 现代主义排印</span>
          </div>
        </div>

        {/* 12 栏瑞士网格排版内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* 左侧子栏: 核心命题与论点 (5 列) */}
          <div className="lg:col-span-5 p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#e5e5e5] flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono text-[#737373] tracking-widest uppercase font-semibold">
                全栈工程宣言
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight text-[#000000]">
                全栈工程始于严谨的数据模型，终于优雅丝滑的人机交互。
              </h2>
              
              <div className="pt-4 border-t border-[#e5e5e5] space-y-3">
                <p className="text-sm font-sans text-[#525252] leading-relaxed">
                  在加州大学伯克利分校，我深入研习了现代分布式计算、关系数据库理论与软件工程体系，同时深受包豪斯与瑞士现代排印历史的熏陶。
                </p>
                <p className="text-sm font-sans text-[#525252] leading-relaxed">
                  对于我而言，“全栈工程师”绝非用 ORM 简单拼凑增删改查并在网页里居中一个元素。
                  它意味着站在全局视角掌控软件的全生命周期：如何设计高内聚低耦合的服务端架构、如何建立不可动摇的端到端类型安全防线，以及如何通过数学网格将海量数据转化为清晰可信赖的现代 Web 界面。
                </p>
              </div>
            </div>

            {/* 第一性原理格言框 */}
            <div className="mt-8 pt-6 border-t border-[#e5e5e5] bg-[#f8f8f8] p-4 border border-[#e5e5e5]">
              <div className="text-[10px] font-mono text-[#6c3b00] uppercase tracking-wider mb-1 font-semibold">
                核心工程理念 (CORE PHILOSOPHY)
              </div>
              <p className="font-serif italic text-base text-[#000000]">
                &ldquo;卓越的软件系统，是严密的后端架构与克制的前端工艺的完美融合。&rdquo;
              </p>
            </div>
          </div>

          {/* 右侧子栏: 三大技术架构支柱 (7 列) */}
          <div className="lg:col-span-7 divide-y divide-[#e5e5e5]">
            {/* 支柱 01 */}
            <div className="p-6 md:p-8 hover:bg-[#f8f8f8] transition-colors">
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="text-xs font-mono text-[#ff0000] font-bold">支柱 01</span>
                <span className="text-xs font-mono text-[#737373]">高并发服务端与强类型 API</span>
              </div>
              <h3 className="font-serif text-2xl text-[#000000] mb-2 font-normal">
                微服务架构、tRPC 契约与异步事件流水线
              </h3>
              <p className="text-sm font-sans text-[#525252] leading-relaxed mb-4">
                使用 Go 与 Node.js (TypeScript) 编写高吞吐后端服务。基于领域驱动设计（DDD）构建正交清晰的业务逻辑，利用 tRPC / GraphQL 实现跨前后端的类型零损耗映射，确保所有数据变更在编译期即可被完整推导校验。
              </p>
              <div className="text-xs font-mono text-[#737373] flex flex-wrap gap-x-2">
                <span className="text-[#000000] font-medium">核心能力:</span>
                <span>RESTful / tRPC / gRPC</span>
                <span>/</span>
                <span className="text-[#0057b8]">事件驱动流水线</span>
                <span>/</span>
                <span>高并发 Goroutines</span>
              </div>
            </div>

            {/* 支柱 02 */}
            <div className="p-6 md:p-8 hover:bg-[#f8f8f8] transition-colors">
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="text-xs font-mono text-[#0057b8] font-bold">支柱 02</span>
                <span className="text-xs font-mono text-[#737373]">数据建模、持久化与实时协同</span>
              </div>
              <h3 className="font-serif text-2xl text-[#000000] mb-2 font-normal">
                PostgreSQL 建模、Redis 状态聚合与 CRDT
              </h3>
              <p className="text-sm font-sans text-[#525252] leading-relaxed mb-4">
                构建高可靠的数据持久化层与实时网络中继。精通 PostgreSQL 关系建模、高级索引优化与事务隔离，配合 WebSockets 和 CRDT 分布式数学模型，打造支持多人在线实时协同与离线可用（Local-First）的现代系统。
              </p>
              <div className="text-xs font-mono text-[#737373] flex flex-wrap gap-x-2">
                <span className="text-[#000000] font-medium">核心能力:</span>
                <span>PostgreSQL 复杂查询</span>
                <span>/</span>
                <span className="text-[#0057b8]">WebSockets 广播网关</span>
                <span>/</span>
                <span>Yjs 状态对齐</span>
              </div>
            </div>

            {/* 支柱 03 */}
            <div className="p-6 md:p-8 hover:bg-[#f8f8f8] transition-colors">
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="text-xs font-mono text-[#6c3b00] font-bold">支柱 03</span>
                <span className="text-xs font-mono text-[#737373]">现代前端架构与设计系统工程</span>
              </div>
              <h3 className="font-serif text-2xl text-[#000000] mb-2 font-normal">
                React 19 并发渲染与瑞士网格排印
              </h3>
              <p className="text-sm font-sans text-[#525252] leading-relaxed mb-4">
                将复杂的业务数据转化为清晰明了、零代码膨胀的现代 Web 界面。严格遵循瑞士排印网格比例与 0 布局偏移纪律，运用 React 19 并发特性、虚拟滚动与响应式布局，确保海量数据交互下稳稳维持 60 FPS 流畅度。
              </p>
              <div className="text-xs font-mono text-[#737373] flex flex-wrap gap-x-2">
                <span className="text-[#000000] font-medium">核心能力:</span>
                <span>零胶囊纪律 (Zero-Pill)</span>
                <span>/</span>
                <span className="text-[#0057b8]">Tailwind CSS v4 架构</span>
                <span>/</span>
                <span>亚 50ms 交互响应</span>
              </div>
            </div>

            {/* 全栈参数汇总底栏 */}
            <div className="p-6 md:p-8 bg-[#f8f8f8] grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="block text-[#737373] mb-1">主用技术栈</span>
                <span className="text-[#000000] font-medium">TypeScript + React</span>
              </div>
              <div>
                <span className="block text-[#737373] mb-1">服务端语言</span>
                <span className="text-[#000000] font-medium">Go / Node.js</span>
              </div>
              <div>
                <span className="block text-[#737373] mb-1">核心数据库</span>
                <span className="text-[#0057b8] font-medium">PostgreSQL / Redis</span>
              </div>
              <div>
                <span className="block text-[#737373] mb-1">交流状态</span>
                <span className="text-[#0057b8] font-medium">欢迎探讨交流 / Say Hi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
