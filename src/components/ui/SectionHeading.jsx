import React from "react";
import Badge from "./Badge";

export default function SectionHeading({
  badge,
  badgeVariant = "slate",
  badgeDot = false,
  title,
  gradientTitle,
  subtitle,
  description,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className={`mb-4 flex ${isCenter ? "justify-center" : "justify-start"}`}>
          <Badge variant={badgeVariant} dot={badgeDot}>
            {badge}
          </Badge>
        </div>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
          {title}{" "}
          {gradientTitle && <span className="text-gradient block sm:inline">{gradientTitle}</span>}
        </h2>
      )}

      {subtitle && (
        <p className="text-lg sm:text-xl font-medium text-slate-700 mb-3">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
