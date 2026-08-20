/**
 * Ilustração isométrica do Hero (laptop + painel).
 * Substitua facilmente por: <Image src="/illustrations/hero-laptop.png" ... />
 */
export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute -inset-6 rounded-full bg-brand-violet/20 blur-3xl animate-pulse-soft" />
      <svg
        viewBox="0 0 560 460"
        className="relative z-10 h-auto w-full animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Ilustração de laptop com painel de controle</title>
        {/* Desk shadow */}
        <ellipse cx="280" cy="420" rx="180" ry="18" fill="#000" opacity="0.25" />

        {/* Laptop base */}
        <path
          d="M120 310 L440 310 L470 350 L90 350 Z"
          fill="url(#heroBase)"
        />
        <rect x="95" y="348" width="370" height="12" rx="3" fill="#1e1b4b" />

        {/* Screen frame */}
        <path
          d="M145 95 L415 95 L430 300 L130 300 Z"
          fill="#0f172a"
          stroke="#312e81"
          strokeWidth="3"
        />
        <path
          d="M158 112 L402 112 L414 285 L146 285 Z"
          fill="url(#heroScreen)"
        />

        {/* Dashboard cards */}
        <rect x="175" y="135" width="90" height="55" rx="8" fill="#fff" opacity="0.95" />
        <rect x="280" y="135" width="90" height="55" rx="8" fill="#fff" opacity="0.9" />
        <rect x="175" y="205" width="195" height="55" rx="8" fill="#fff" opacity="0.88" />

        <path d="M190 170 H245" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
        <path d="M190 155 H230" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
        <path d="M295 155 H350" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
        <path d="M295 170 H335" stroke="#a855f7" strokeWidth="6" strokeLinecap="round" />

        <path
          d="M190 245 L230 225 L265 240 L310 215 L350 230"
          stroke="url(#heroLine)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Floating cloud */}
        <g className="animate-float-slow" style={{ transformOrigin: "90px 80px" }}>
          <ellipse cx="78" cy="88" rx="34" ry="22" fill="url(#floatGrad)" />
          <circle cx="58" cy="88" r="16" fill="url(#floatGrad)" />
          <circle cx="95" cy="82" r="18" fill="url(#floatGrad)" />
        </g>

        {/* Floating phone */}
        <g transform="translate(455 150)">
          <rect x="0" y="0" width="48" height="86" rx="10" fill="url(#floatGrad)" />
          <rect x="6" y="10" width="36" height="58" rx="4" fill="#0f172a" />
          <circle cx="24" cy="76" r="4" fill="#fff" opacity="0.8" />
        </g>

        {/* Floating API chip */}
        <g transform="translate(40 220)">
          <rect x="0" y="0" width="70" height="42" rx="10" fill="url(#floatGrad)" />
          <text
            x="35"
            y="27"
            textAnchor="middle"
            fill="#fff"
            fontSize="14"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
          >
            API
          </text>
        </g>

        <defs>
          <linearGradient id="heroBase" x1="120" y1="310" x2="470" y2="350">
            <stop stopColor="#312e81" />
            <stop offset="1" stopColor="#1e1b4b" />
          </linearGradient>
          <linearGradient id="heroScreen" x1="158" y1="112" x2="414" y2="285">
            <stop stopColor="#1e1b4b" />
            <stop offset="1" stopColor="#312e81" />
          </linearGradient>
          <linearGradient id="heroLine" x1="190" y1="245" x2="350" y2="215">
            <stop stopColor="#a855f7" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="floatGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#a855f7" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Troque facilmente por imagem final:
          <Image src="/illustrations/hero-laptop.png" alt="..." fill className="object-contain" />
      */}
    </div>
  );
}
