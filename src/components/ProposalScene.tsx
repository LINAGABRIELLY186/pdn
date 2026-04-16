import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const NO_MESSAGES = [
  "Tem certeza? 🥺",
  "Pensa de novo... 💔",
  "Não faz isso 😢",
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
      confetti({ particleCount: 4, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, colors, shapes: ["circle"] });
  };

  const handleYes = () => {
    setAccepted(true);
    fireConfetti();
    setTimeout(fireConfetti, 800);
  };

  const dodgeNo = () => {
    setNoIndex((i) => (i + 1) % NO_MESSAGES.length);
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 160;
    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.06, 1.5));
  };

  if (accepted) {
    return (
      <div className="w-full max-w-3xl mx-auto px-5 py-12 text-center animate-scale-in">
        <div className="text-6xl sm:text-7xl mb-6 animate-heartbeat">💕</div>
        <h2 className="font-serif-romance text-4xl sm:text-7xl font-semibold text-gradient-rose animate-shimmer mb-5 leading-tight tracking-tight">
          Sim! Para sempre.
        </h2>
        <p className="font-script text-2xl sm:text-4xl text-primary mb-7">
          Maria Clara, eu te amo ❤️
        </p>
        <div className="glass rounded-3xl p-6 sm:p-8 shadow-card max-w-2xl mx-auto">
          <p className="font-serif-romance text-base sm:text-2xl text-foreground/85 italic leading-relaxed">
            "Agora oficialmente, a melhor história da minha vida começa com você 💕"
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-8 text-2xl sm:text-3xl">
          {["✨", "💖", "✨", "💖", "✨"].map((s, i) => (
            <span key={i} className="animate-sparkle" style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-5 py-12 text-center animate-fade-in-up">
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full animate-pulse" />
        <Heart className="relative w-16 h-16 sm:w-20 sm:h-20 text-primary fill-primary animate-heartbeat drop-shadow-lg" />
      </div>

      <h2 className="font-serif-romance text-4xl sm:text-6xl md:text-7xl font-semibold text-gradient-rose leading-[1.05] mb-3 tracking-tight">
        Maria Clara,
      </h2>
      <p className="font-serif-romance text-2xl sm:text-4xl text-foreground/85 mb-10 sm:mb-12 italic">
        você aceita namorar comigo? <span className="text-primary not-italic">❤️</span>
      </p>

      <div className="relative h-44 flex items-center justify-center gap-3 sm:gap-6">
        <Button
          onClick={handleYes}
          style={{ transform: `scale(${yesScale})` }}
          className="rounded-full bg-gradient-rose hover:opacity-95 shadow-romance text-lg sm:text-2xl px-8 sm:px-12 h-14 sm:h-16 transition-bounce font-semibold active:scale-95"
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
          className="rounded-full border-primary/30 text-foreground/60 px-5 sm:px-7 h-12 hover:bg-secondary text-xs sm:text-sm whitespace-nowrap"
        >
          {NO_MESSAGES[noIndex]}
        </Button>
      </div>

      <button
        onClick={onBack}
        className="mt-10 text-sm text-muted-foreground hover:text-primary transition-romance underline-offset-4 hover:underline"
      >
        ← reviver a história
      </button>
    </div>
  );
};

export default ProposalScene;
