import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const NO_MESSAGES = [
  "Tem certeza? 🥺",
  "Pensa de novo... 💔",
  "Não faz isso comigo 😢",
  "Olha pro meu coração 💗",
  "Vai, diz sim! 🙏",
  "Por favor? ❤️",
];

const ProposalScene = ({ onBack }: { onBack: () => void }) => {
  const [accepted, setAccepted] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const [yesScale, setYesScale] = useState(1);

  const fireConfetti = () => {
    const end = Date.now() + 2500;
    const colors = ["#ff4d8d", "#ffb6c1", "#f5c542", "#ffffff"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      shapes: ["circle"],
    });
  };

  const handleYes = () => {
    setAccepted(true);
    fireConfetti();
    setTimeout(fireConfetti, 800);
  };

  const dodgeNo = () => {
    setNoIndex((i) => (i + 1) % NO_MESSAGES.length);
    const x = (Math.random() - 0.5) * 280;
    const y = (Math.random() - 0.5) * 220;
    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.08, 1.6));
  };

  if (accepted) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center animate-scale-in">
        <div className="text-7xl mb-6 animate-heartbeat">💕</div>
        <h2 className="font-serif-romance text-5xl sm:text-7xl font-semibold text-gradient-rose animate-shimmer mb-6">
          Sim! Para sempre.
        </h2>
        <p className="font-script text-3xl sm:text-4xl text-primary mb-8">
          Maria Clara, eu te amo ❤️
        </p>
        <p className="font-serif-romance text-xl sm:text-2xl text-foreground/85 italic max-w-2xl mx-auto">
          "Agora oficialmente, a melhor história da minha vida começa com você 💕"
        </p>
        <div className="flex justify-center gap-2 mt-10 text-3xl">
          <span className="animate-sparkle" style={{ animationDelay: "0s" }}>✨</span>
          <span className="animate-sparkle" style={{ animationDelay: "0.3s" }}>💖</span>
          <span className="animate-sparkle" style={{ animationDelay: "0.6s" }}>✨</span>
          <span className="animate-sparkle" style={{ animationDelay: "0.9s" }}>💖</span>
          <span className="animate-sparkle" style={{ animationDelay: "1.2s" }}>✨</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center animate-fade-in-up">
      <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6 animate-heartbeat drop-shadow-lg" />
      <h2 className="font-serif-romance text-4xl sm:text-6xl md:text-7xl font-semibold text-gradient-rose leading-tight mb-4">
        Maria Clara,
      </h2>
      <p className="font-serif-romance text-3xl sm:text-5xl text-foreground/90 mb-12">
        você aceita namorar comigo? <span className="text-primary">❤️</span>
      </p>

      <div className="relative h-40 flex items-center justify-center gap-6">
        <Button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="rounded-full bg-gradient-rose hover:opacity-90 shadow-romance text-xl sm:text-2xl px-10 py-8 transition-bounce font-semibold"
        >
          💖 Sim
        </Button>
        <Button
          onMouseEnter={dodgeNo}
          onFocus={dodgeNo}
          onClick={dodgeNo}
          variant="outline"
          style={{
            transform: noPos ? `translate(${noPos.x}px, ${noPos.y}px)` : undefined,
            transition: "transform 0.35s cubic-bezier(0.68,-0.55,0.27,1.55)",
          }}
          className="rounded-full border-primary/30 text-foreground/70 px-8 py-6 hover:bg-secondary"
        >
          😢 {NO_MESSAGES[noIndex]}
        </Button>
      </div>

      <button
        onClick={onBack}
        className="mt-12 text-sm text-muted-foreground hover:text-primary transition-romance underline-offset-4 hover:underline"
      >
        ← reviver a história
      </button>
    </div>
  );
};

export default ProposalScene;
