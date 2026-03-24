"use client";

export default function SteamEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Steam wisps */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="steam-wisp"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${2.5 + i * 0.5}s`,
            opacity: 0.15 + (i % 3) * 0.05,
          }}
        />
      ))}
    </div>
  );
}
