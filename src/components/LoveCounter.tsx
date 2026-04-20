import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const START_DATE = new Date("2025-12-25T00:00:00");

const calc = () => {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - START_DATE.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const LoveCounter = () => {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ value, label }: { value: number; label: string }) => (
    <div className="flex-1 flex flex-col items-center glass rounded-2xl px-2 py-3 sm:px-4 sm:py-4 shadow-card transition-romance hover:-translate-y-0.5">
      <span className="font-serif-romance text-2xl sm:text-4xl font-semibold text-gradient-rose tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5 animate-fade-in-up px-2">
      <div className="flex items-center gap-2 text-primary">
        <Heart className="w-4 h-4 fill-primary animate-heartbeat" />
        <span className="font-script text-xl sm:text-3xl">Nosso tempo juntos</span>
        <Heart className="w-4 h-4 fill-primary animate-heartbeat" />
      </div>
      <div className="flex gap-2 sm:gap-3 w-full max-w-md">
        <Box value={t.days} label="dias" />
        <Box value={t.hours} label="horas" />
        <Box value={t.minutes} label="min" />
        <Box value={t.seconds} label="seg" />
      </div>
      <p className="text-center text-foreground/75 max-w-md font-serif-romance text-sm sm:text-lg italic px-2 leading-relaxed">
        Há <span className="text-primary font-semibold not-italic">{t.days}d {t.hours}h {t.minutes}m {t.seconds}s</span>, você trouxe cor pra minha vida ❤️
      </p>
    </div>
  );
};

export default LoveCounter;
