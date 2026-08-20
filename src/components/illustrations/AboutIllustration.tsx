/**
 * Ilustração isométrica da seção Sobre (monitor + gráficos).
 * Substitua facilmente por: <Image src="/illustrations/about-monitor.png" ... />
 */
export function AboutIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute -inset-4 rounded-full bg-brand-blue/15 blur-3xl" />
      <svg
        viewBox="0 0 520 420"
        className="relative z-10 h-auto w-full animate-float-slow"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Ilustração de monitor com gráficos e tabelas</title>
        <ellipse cx="260" cy="390" rx="150" ry="14" fill="#000" opacity="0.12" />

        {/* Monitor stand */}
        <path d="M230 330 L290 330 L305 360 L215 360 Z" fill="#cbd5e1" />
        <rect x="200" y="358" width="120" height="12" rx="4" fill="#94a3b8" />

        {/* Monitor body */}
        <rect x="90" y="50" width="340" height="280" rx="18" fill="#0f172a" />
        <rect x="108" y="68" width="304" height="230" rx="8" fill="url(#aboutScreen)" />

        {/* Chart bars */}
        <rect x="140" y="220" width="28" height="50" rx="4" fill="#22c55e" />
        <rect x="180" y="195" width="28" height="75" rx="4" fill="#3b82f6" />
        <rect x="220" y="170" width="28" height="100" rx="4" fill="#a855f7" />
        <rect x="260" y="150" width="28" height="120" rx="4" fill="#22c55e" />

        {/* Table */}
        <rect x="310" y="110" width="80" height="140" rx="8" fill="#fff" opacity="0.92" />
        <path d="M322 130 H378" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
        <path d="M322 150 H365" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
        <path d="M322 170 H372" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
        <path d="M322 190 H350" stroke="#a855f7" strokeWidth="4" strokeLinecap="round" />
        <path d="M322 210 H360" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />

        {/* Floating gear */}
        <g transform="translate(40 120)">
          <circle cx="28" cy="28" r="28" fill="url(#aboutFloat)" />
          <circle cx="28" cy="28" r="10" fill="#fff" opacity="0.9" />
        </g>

        {/* Floating cloud */}
        <g transform="translate(420 90)">
          <ellipse cx="30" cy="22" rx="30" ry="18" fill="url(#aboutFloat)" />
          <circle cx="14" cy="22" r="12" fill="url(#aboutFloat)" />
          <circle cx="42" cy="18" r="14" fill="url(#aboutFloat)" />
        </g>

        <defs>
          <linearGradient id="aboutScreen" x1="108" y1="68" x2="412" y2="298">
            <stop stopColor="#eef2ff" />
            <stop offset="1" stopColor="#e0e7ff" />
          </linearGradient>
          <linearGradient id="aboutFloat" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a855f7" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
