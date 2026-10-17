import React from "react";
import Badge from "../ui/Badge";

export default function PageHeader({
  badge,
  badgeVariant = "slate",
  badgeDot = true,
  title,
  gradientTitle,
  description,
  stats = [],
  children,
}) {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80 bg-white"
      style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {badge && (
          <div className="flex justify-center mb-5">
            <Badge variant={badgeVariant} dot={badgeDot}>
              {badge}
            </Badge>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6 max-w-4xl mx-auto">
          {title}{" "}
          {gradientTitle && (
            <span className="text-gradient block sm:inline">{gradientTitle}</span>
          )}
        </h1>

        {description && (
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {description}
          </p>
        )}

        {children}

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-200">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  <span className="text-gradient">{stat.value}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
