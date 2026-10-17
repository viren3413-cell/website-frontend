import React from "react";

export default function GlassCard({
  children,
  className = "",
  interactive = false,
  gradientBorder = false,
  hoverGlow = true,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`glass-card relative overflow-hidden p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm ${
        interactive ? "glass-card-interactive" : ""
      } ${gradientBorder ? "before:absolute before:inset-0 before:p-[1px] before:rounded-[1rem] before:bg-gradient-to-br before:from-slate-400/40 before:via-slate-200/30 before:to-transparent before:-z-10" : ""} ${className}`}
      {...props}
    >
      {/* Subtle top light sheen effect in light slate */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/50 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
