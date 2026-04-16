import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";
import LoveCounter from "@/components/LoveCounter";
import ChapterScene, { Chapter } from "@/components/ChapterScene";
import ProposalScene from "@/components/ProposalScene";

import heroBg from "@/assets/hero-bg.jpg";
import ch1 from "@/assets/chapter-1.jpg";
import ch2 from "@/assets/chapter-2.jpg";
import ch3 from "@/assets/chapter-3.jpg";
import ch4 from "@/assets/chapter-4.jpg";
import ch5 from "@/assets/chapter-5.jpg";

// Free, hotlinkable demo songs (royalty-free piano). Replace with your own audio anytime.
const SONG_PIANO_1 =
  "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-piano-music-115960.mp3";
const SONG_PIANO_2 =
  "https://cdn.pixabay.com/download/audio/2022/10/18/audio_31ab6cc0e0.mp3?filename=romantic-piano-122802.mp3";
const SONG_PIANO_3 =
  "https://cdn.pixabay.com/download/audio/2023/06/19/audio_6e06f0f66b.mp3?filename=piano-moment-153657.mp3";

const chapters: Chapter[] = [
  {
    title: "Como tudo começou",
    subtitle: "Capítulo I",
    text:
      "Foi num dia comum que tudo mudou. Um olhar, um sorriso tímido, e o mundo já não cabia mais dentro de mim. Quem diria que ali começaria a história mais linda da minha vida?",
    image: ch1,
    music: { src: SONG_PIANO_1, title: "Nosso primeiro olhar", artist: "Piano suave" },
  },
  {
    title: "Nosso primeiro momento especial",
    subtitle: "Capítulo II",
    text:
      "Lembro de cada detalhe. O som da sua risada, o jeito que seus olhos brilhavam, o silêncio confortável entre nós. Foi ali que entendi: contigo, até o tempo respira diferente.",
    image: ch2,
    music: { src: SONG_PIANO_2, title: "Caminhando contigo", artist: "Trilha do nosso filme" },
  },
  {
    title: "Quando percebi que era você",
    subtitle: "Capítulo III",
    text:
      "Não foi um trovão, foi uma certeza calma. Aquele instante em que percebi que você não era só especial — você era o lugar onde meu coração queria morar.",
    image: ch3,
    music: { src: SONG_PIANO_3, title: "Pequenos detalhes", artist: "Memórias em piano" },
  },
  {
    title: "Momentos inesquecíveis",
    subtitle: "Capítulo IV",
    text:
      "Cada dança, cada abraço, cada noite de luzes e risadas. Você transformou momentos comuns em memórias que eu quero reviver pra sempre.",
    image: ch4,
    music: { src: SONG_PIANO_1, title: "Sob as luzes", artist: "Nossa noite" },
  },
  {
    title: "O que você significa pra mim",
    subtitle: "Capítulo V",
    text:
      "Você é meu lar, minha calmaria e minha aventura favorita. É a primeira pessoa que penso ao acordar e o último sorriso antes de dormir. Você é, simplesmente, tudo.",
    image: ch5,
    music: { src: SONG_PIANO_2, title: "Pra sempre", artist: "Você + eu" },
  },
];

type Stage = "landing" | "chapter" | "proposal";

const Index = () => {
  const [stage, setStage] = useState<Stage>("landing");
  const [chapterIdx, setChapterIdx] = useState(0);

  useEffect(() => {
    document.title = "Maria Clara, nossa história ❤️ — um pedido especial";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Uma jornada romântica em capítulos: nossa história, nossas músicas e um pedido especial para Maria Clara.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const start = () => {
    setChapterIdx(0);
    setStage("chapter");
  };

  const next = () => {
    if (chapterIdx < chapters.length - 1) {
      setChapterIdx((i) => i + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStage("proposal");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prev = () => {
    if (chapterIdx > 0) {
      setChapterIdx((i) => i - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setStage("landing");
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts count={stage === "landing" ? 24 : 14} />

      {stage === "landing" && (
        <section
          className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, hsl(var(--background) / 0.4), hsl(var(--background) / 0.85)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center max-w-3xl animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
              <Heart className="w-12 h-12 text-primary fill-primary mx-3 animate-heartbeat drop-shadow-lg" />
              <Sparkles className="w-6 h-6 text-accent animate-sparkle" style={{ animationDelay: "1s" }} />
            </div>

            <h1 className="font-serif-romance text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight text-gradient-rose animate-shimmer">
              Você acha que com um simples olhar,
              <br />
              <span className="font-script text-5xl sm:text-7xl md:text-8xl">pode apaixonar alguém?</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-foreground/80 italic font-serif-romance">
              Esta é a nossa história, contada em capítulos.
            </p>

            <div className="mt-10">
              <Button
                onClick={start}
                className="rounded-full bg-gradient-rose hover:opacity-90 shadow-romance text-base sm:text-lg px-8 py-7 font-semibold transition-bounce hover:scale-105"
              >
                Clique aqui e descubra essa história de amor ❤️
              </Button>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 w-full max-w-3xl">
            <LoveCounter />
          </div>
        </section>
      )}

      {stage === "chapter" && (
        <section className="relative z-10 min-h-screen flex items-center">
          <ChapterScene
            chapter={chapters[chapterIdx]}
            index={chapterIdx}
            total={chapters.length}
            onPrev={prev}
            onNext={next}
            nextLabel={chapterIdx === chapters.length - 1 ? "Chegou a hora..." : undefined}
          />
        </section>
      )}

      {stage === "proposal" && (
        <section className="relative z-10 min-h-screen flex items-center">
          <ProposalScene
            onBack={() => {
              setChapterIdx(chapters.length - 1);
              setStage("chapter");
            }}
          />
        </section>
      )}
    </main>
  );
};

export default Index;
