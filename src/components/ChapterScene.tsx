import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MusicPlayer from "./MusicPlayer";

export interface Chapter {
  title: string;
  subtitle?: string;
  text: string;
  image: string;
  music?: { src: string; title: string; artist?: string };
}

interface ChapterSceneProps {
  chapter: Chapter;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  nextLabel?: string;
}

const ChapterScene = ({ chapter, index, total, onPrev, onNext, nextLabel }: ChapterSceneProps) => {
  return (
    <div key={index} className="w-full max-w-5xl mx-auto px-5 py-8 sm:py-14 animate-fade-in-up">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1 rounded-full transition-romance ${
              i === index ? "w-8 bg-gradient-rose" : i < index ? "w-2 bg-primary/40" : "w-2 bg-primary/15"
            }`}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="font-script text-xl sm:text-2xl text-primary/80">Capítulo {index + 1}</p>
        <h2 className="font-serif-romance text-3xl sm:text-5xl md:text-6xl font-semibold text-gradient-rose mt-1 leading-tight tracking-tight">
          {chapter.title}
        </h2>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
        <div className="relative animate-scale-in order-1">
          <div className="absolute -inset-4 bg-gradient-rose rounded-[2rem] blur-2xl opacity-30" />
          <div className="relative rounded-3xl overflow-hidden shadow-romance">
            <img
              src={chapter.image}
              alt={chapter.title}
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-rose shadow-romance flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground animate-heartbeat" />
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6 order-2">
          <div className="glass rounded-3xl p-5 sm:p-7 shadow-card">
            <p className="font-serif-romance text-lg sm:text-2xl leading-relaxed text-foreground/85 italic">
              "{chapter.text}"
            </p>
          </div>
          {chapter.music && (
            <div className="flex">
              <MusicPlayer {...chapter.music} />
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10 sm:mt-12 gap-3">
        <Button
          variant="ghost"
          onClick={onPrev}
          disabled={index === 0}
          className="rounded-full hover:bg-primary/10 disabled:opacity-30 h-12 px-4 sm:px-5"
        >
          <ArrowLeft className="w-4 h-4 sm:mr-1" />
          <span className="hidden sm:inline">Voltar</span>
        </Button>
        <Button
          onClick={onNext}
          className="rounded-full bg-gradient-rose hover:opacity-95 shadow-romance px-5 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold transition-bounce hover:scale-105 active:scale-95 flex-1 sm:flex-initial max-w-xs"
        >
          {nextLabel ?? "Próximo capítulo"}
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ChapterScene;
