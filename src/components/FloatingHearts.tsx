import { Heart } from "lucide-react";
import { useMemo } from "react";

interface FloatingHeartsProps {
  count?: number;
}

const FloatingHearts = ({ count = 18 }: FloatingHeartsProps) => {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 12 + Math.random() * 24,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="floating-heart fill-primary"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
