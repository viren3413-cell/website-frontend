import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  loading = false,
  disabled = false,
  className = "",
  onClick,
  ...props
}) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm",
    md: "px-5 py-2.5 text-sm sm:text-base",
    lg: "px-7 py-3.5 text-base sm:text-lg font-semibold",
  };

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost:
      "inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-800 hover:bg-slate-50 rounded-full transition-all duration-200 cursor-pointer font-medium",
    outline:
      "inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:border-slate-400 hover:bg-[#f8fafc] text-[#334155] rounded-full transition-all duration-200 cursor-pointer shadow-xs font-semibold",
  };

  const combinedClass = `${
    variantClasses[variant] || variantClasses.primary
  } ${sizeClasses[size]} ${disabled || loading ? "opacity-60 cursor-not-allowed pointer-events-none" : ""} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        Icon && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {!loading && IconRight && (
        <IconRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClass}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${combinedClass}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
