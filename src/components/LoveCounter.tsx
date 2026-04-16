import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const START_DATE = new Date("2024-12-25T00:00:00");

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
    <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-soft border border-primary/10 min-w-[72px]">
      <span className="font-serif-romance text-3xl sm:text-4xl font-semibold text-gradient-rose tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in-up">
      <div className="flex items-center gap-2 text-primary">
        <Heart className="w-5 h-5 fill-primary animate-heartbeat" />
        <span className="font-script text-2xl sm:text-3xl">Nosso tempo juntos</span>
        <Heart className="w-5 h-5 fill-primary animate-heartbeat" />
      </div>
      <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
        <Box value={t.days} label="dias" />
        <Box value={t.hours} label="horas" />
        <Box value={t.minutes} label="min" />
        <Box value={t.seconds} label="seg" />
      </div>
      <p className="text-center text-foreground/80 max-w-md font-serif-romance text-lg sm:text-xl italic px-4">
        Há <span className="text-primary font-semibold">{t.days} dias, {t.hours} horas, {t.minutes} minutos e {t.seconds} segundos</span>, você trouxe cor pra minha vida ❤️
      </p>
    </div>
  );
};

export default LoveCounter;
