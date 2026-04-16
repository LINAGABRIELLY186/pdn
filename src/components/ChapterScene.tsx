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
    <div key={index} className="w-full max-w-5xl mx-auto px-4 py-10 sm:py-16 animate-fade-in-up">
      <div className="flex items-center justify-center gap-2 mb-4">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-romance ${
              i === index ? "w-8 bg-gradient-rose" : "w-2 bg-primary/20"
            }`}
          />
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="font-script text-2xl text-primary/80">Capítulo {index + 1}</p>
        <h2 className="font-serif-romance text-4xl sm:text-5xl md:text-6xl font-semibold text-gradient-rose mt-1">
          {chapter.title}
        </h2>
        {chapter.subtitle && (
          <p className="text-muted-foreground italic mt-2">{chapter.subtitle}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative animate-scale-in">
          <div className="absolute -inset-3 bg-gradient-rose rounded-3xl blur-2xl opacity-30" />
          <img
            src={chapter.image}
            alt={chapter.title}
            loading="lazy"
            width={1024}
            height={768}
            className="relative rounded-3xl shadow-romance w-full h-auto object-cover aspect-[4/3]"
          />
          <Heart className="absolute -top-4 -right-4 w-10 h-10 text-primary fill-primary drop-shadow-lg animate-heartbeat" />
        </div>

        <div className="space-y-6">
          <p className="font-serif-romance text-xl sm:text-2xl leading-relaxed text-foreground/90 italic">
            "{chapter.text}"
          </p>
          {chapter.music && (
            <div className="flex">
              <MusicPlayer {...chapter.music} />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-12 gap-4">
        <Button
          variant="ghost"
          onClick={onPrev}
          disabled={index === 0}
          className="rounded-full hover:bg-primary/10 disabled:opacity-30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
        <Button
          onClick={onNext}
          className="rounded-full bg-gradient-rose hover:opacity-90 shadow-romance px-6 sm:px-8 py-6 text-base"
        >
          {nextLabel ?? "Próximo capítulo"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ChapterScene;
