import React from "react";

export default function Badge({
  children,
  variant = "slate",
  dot = false,
  className = "",
  size = "md",
}) {
  const variants = {
    slate: "bg-slate-50 text-slate-700 border-slate-200 shadow-xs font-semibold",
    white: "bg-white text-slate-800 border-slate-300/80 shadow-xs font-semibold",
    cyan: "bg-slate-50 text-slate-700 border-slate-200 shadow-xs font-semibold",
    indigo: "bg-slate-50 text-slate-700 border-slate-200 shadow-xs font-semibold",
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs font-semibold",
    purple: "bg-slate-50 text-slate-700 border-slate-200 shadow-xs font-semibold",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs font-semibold",
    md: "px-3 py-1 text-xs sm:text-sm font-semibold",
    lg: "px-4 py-1.5 text-sm font-bold",
  };

  const dotColors = {
    slate: "bg-slate-500",
    white: "bg-slate-500",
    cyan: "bg-slate-500",
    indigo: "bg-slate-500",
    emerald: "bg-emerald-500",
    purple: "bg-slate-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full backdrop-blur-sm transition-all duration-200 ${
        variants[variant] || variants.slate
      } ${sizes[size] || sizes.md} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              dotColors[variant] || dotColors.slate
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${
              dotColors[variant] || dotColors.slate
            }`}
          />
        </span>
      )}
      {children}
    </span>
  );
}
