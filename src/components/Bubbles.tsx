import { useMemo } from "react";

const Bubbles = () => {
  const bubbles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 12,
      duration: 8 + Math.random() * 15,
      delay: Math.random() * 10,
      opacity: 0.1 + Math.random() * 0.3,
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full animate-bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
            background: `radial-gradient(circle at 30% 30%, hsl(187 80% 70% / 0.6), hsl(187 80% 48% / 0.2))`,
            boxShadow: `inset 0 0 ${b.size / 3}px hsl(195 100% 80% / 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
