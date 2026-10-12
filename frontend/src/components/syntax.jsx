import React from 'react';

// Tiny syntax-highlight helpers for hand-written "code" content
export const K = ({ children }) => <span className="text-syn-kw">{children}</span>;
export const S = ({ children }) => <span className="text-syn-str">"{children}"</span>;
export const F = ({ children }) => <span className="text-syn-fn">{children}</span>;
export const P = ({ children }) => <span className="text-syn-prop">{children}</span>;
export const N = ({ children }) => <span className="text-syn-const">{children}</span>;
export const C = ({ children }) => <span className="text-syn-comment italic">{children}</span>;
export const T = ({ children }) => <span className="text-syn-tag">{children}</span>;

export const Code = ({ children, className = '' }) => (
  <div className={`code font-mono text-[13px] sm:text-sm leading-7 ${className}`}>{children}</div>
);

// One numbered line; `indent` is in 2-space steps
export const L = ({ children, indent = 0, className = '' }) => (
  <div className={`ln ${className}`}>
    <div style={{ marginLeft: `${indent * 2}ch` }}>{children ?? ' '}</div>
  </div>
);

// Sticky breadcrumb + padded body for each "file" in the editor
export const EditorSection = ({ id, file, icon, children, className = '' }) => (
  <section id={id} className={`border-b border-line ${className}`}>
    <div className="sticky top-0 z-10 h-7 flex items-center gap-1.5 px-4 sm:px-6 bg-editor/95 backdrop-blur border-b border-line font-mono text-xs text-muted">
      <span>src</span>
      <span className="opacity-60">›</span>
      {icon}
      <span className="text-fg/80">{file}</span>
    </div>
    <div className="px-4 sm:px-8 lg:px-12 py-10 md:py-14">{children}</div>
  </section>
);
