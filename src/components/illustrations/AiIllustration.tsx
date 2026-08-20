/**
 * Ilustração do cérebro/malha de IA.
 * Substitua facilmente por: <Image src="/illustrations/ai-brain.png" ... />
 */
export function AiIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute inset-8 rounded-full bg-brand-violet/30 blur-3xl animate-pulse-soft" />
      <svg
        viewBox="0 0 420 420"
        className="relative z-10 mx-auto h-auto w-full max-w-md animate-float"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Ilustração de inteligência artificial</title>

        {/* Outer mesh rings */}
        <circle
          cx="210"
          cy="210"
          r="150"
          stroke="url(#aiRing)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <circle
          cx="210"
          cy="210"
          r="115"
          stroke="url(#aiRing)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <circle
          cx="210"
          cy="210"
          r="78"
          stroke="url(#aiRing)"
          strokeWidth="2"
          opacity="0.85"
        />

        {/* Connection nodes */}
        {[
          [210, 60],
          [320, 110],
          [360, 210],
          [320, 310],
          [210, 360],
          [100, 310],
          [60, 210],
          [100, 110],
          [150, 160],
          [270, 160],
          [270, 260],
          [150, 260],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i < 8 ? 6 : 4} fill="url(#aiNode)" />
        ))}

        {/* Center AI badge */}
        <circle cx="210" cy="210" r="48" fill="url(#aiCore)" />
        <text
          x="210"
          y="218"
          textAnchor="middle"
          fill="#fff"
          fontSize="28"
          fontFamily="Inter, sans-serif"
          fontWeight="800"
        >
          AI
        </text>

        <defs>
          <linearGradient id="aiRing" x1="60" y1="60" x2="360" y2="360">
            <stop stopColor="#a855f7" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="aiNode" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#c084fc" />
            <stop offset="1" stopColor="#4ade80" />
          </linearGradient>
          <linearGradient id="aiCore" x1="162" y1="162" x2="258" y2="258">
            <stop stopColor="#7c3aed" />
            <stop offset="0.5" stopColor="#2563eb" />
            <stop offset="1" stopColor="#16a34a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
