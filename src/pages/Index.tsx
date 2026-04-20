import { useEffect, useState } from "react";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";
import LoveCounter from "@/components/LoveCounter";
import ChapterScene, { Chapter } from "@/components/ChapterScene";
import ProposalScene from "@/components/ProposalScene";

import heroBg from "@/assets/hero-nos.png";
import ch1 from "@/assets/chapter-1.jpeg";
import ch2 from "@/assets/chapter-2.png";
import ch3 from "@/assets/chapter-3.png";
import ch4 from "@/assets/chapter-4.jpeg";
import ch5 from "@/assets/chapter-5.jpeg";

const SONG_PIANO_1 =
  "/music/pagode.mp4";
const SONG_PIANO_2 =
  "/music/greys anatomy.mp4";
const SONG_PIANO_3 =
  "/music/justin bieber.mp4";
const SONG_PIANO_4 =
  "/music/panda.mp4";
const SONG_PIANO_5 =
  "/music/sotam.mp4";

const chapters: Chapter[] = [
  {
    title: "Como tudo começou",
    subtitle: "Capítulo I",
    text:
      "Desde a primeira vez que te vi, seus olhos me prenderam de um jeito único. Desde então, não consegui mais pensar em outra coisa além de você e da forma como costumo dizer: 'seus lindos olhos que parecem olhos de gato'. Desde aquele instante, você mexe comigo por completo, e até hoje continua transformando meus dias.",
    image: ch1,
    music: { src: SONG_PIANO_1, title: "Nosso música", artist: "Piano suave" },
  },
  {
    title: "Nosso primeiro momento especial",
    subtitle: "Capítulo II",
    text:
      "Lembro-me como se fosse hoje: minhas mãos suavam, o coração disparado, aquele frio na barriga que não me deixava pensar direito. As palavras simplesmente sumiram da minha boca. Então veio o nosso primeiro beijo — e ele despertou algo em mim que até hoje não consigo explicar. O encaixe foi perfeito, como se estivéssemos destinados a aquele instante. Desde aquele dia, durmo e acordo pensando em você. Nunca imaginei que aquele momento seria uma verdadeira virada de chave na minha vida, mas foi. E desde então, tudo ganhou um novo sentido ao seu lado.",
    image: ch2,
    music: { src: SONG_PIANO_2, title: "oq eu diria pra voce", artist: "Trilha do nosso filme" },
  },
  {
    title: "Quando percebi que era você",
    subtitle: "Capítulo III",
    text:
      "A sua energia é diferente de tudo o que já vi na vida. O seu sorriso alegra o meu dia e a leveza com que você encara a vida, mesmo diante dos dias difíceis, me encanta. O jeito que você me abraça e diz que é a minha mulher fez com que eu finalmente entendesse o que é o amor. As pessoas sempre dizem que a gente sente quando encontra a pessoa certa; eu confesso que duvidei, mas sobre você eu sempre tive a certeza de que era para mim. Este é o amor que eu tanto esperei — e é muito melhor do que eu jamais imaginei.",
    image: ch3,
    music: { src: SONG_PIANO_3, title: "justin", artist: "Memórias em piano" },
  },
  {
    title: "Momentos inesquecíveis",
    subtitle: "Capítulo IV",
    text:
      "Todos os momentos ao seu lado são mágicos e únicos. É como se eu te conhecesse há mil anos e você soubesse exatamente do que eu gosto. Esta foto retrata um momento muito importante: a nossa primeira viagem. Conhecer as suas raízes me fez entender que quero descobrir cada detalhe da sua história. Quero aprender tudo o que você gosta — e o que não gosta também. Quero ser quem conhece aquilo que você não tem coragem de dizer a mais ninguém, além de viver momentos inesquecíveis ao seu lado. Afinal, com você, tudo é mais gostoso de sentir.",
    image: ch4,
    music: { src: SONG_PIANO_4, title: "eu te seguro", artist: "Nossa noite" },
  },
  {
    title: "O que você significa pra mim",
    subtitle: "Capítulo V",
    text:
    "Como você sabe, desde a primeira vez, eu tive a certeza de que você era a mulher da minha vida. Sonho em me casar com você e construir uma linda história de amor ao seu lado. Sonho também em ter você como a mãe dos meus filhos. Te admiro muito como mulher, irmã e, principalmente, como ser humano. Você tem um coração enorme — e pessoas assim estão escassas no mundo. Eu não poderia deixar essa oportunidade passar: quero ter você para o resto da minha vida; quero viver e envelhecer ao seu lado. Você me faz um bem danado e a gente se encaixa bonitinho demais. Obrigado por reviver as borboletas no meu estômago e por me amar tanto assim. Tenho muito orgulho de ter alguém tão incrível ao meu lado. E, por favor... pense direito ao responder à próxima pergunta.",
    image: ch5,
    music: { src: SONG_PIANO_5, title: "Foi assim", artist: "Você + eu" },
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
    <main className="relative min-h-[100dvh] overflow-x-hidden">
      {/* Subtle background texture */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-primary/5 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent/8 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-primary/5 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      <FloatingHearts count={stage === "landing" ? 18 : 10} />

      {stage === "landing" && (
        <section
          className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 py-10 z-10 pt-safe pb-safe"
          style={{
            backgroundImage: `linear-gradient(180deg, hsl(var(--background) / 0.55), hsl(var(--background) / 0.92)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center max-w-3xl animate-fade-in-up w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 sm:mb-8">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-foreground/70">Uma história de amor</span>
              <Sparkles className="w-3.5 h-3.5 text-accent" />
            </div>

            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-full animate-pulse" />
                <Heart className="relative w-16 h-16 sm:w-20 sm:h-20 text-primary fill-primary animate-heartbeat drop-shadow-2xl" />
              </div>
            </div>

            <h1 className="font-serif-romance text-[2.25rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium text-foreground/90 tracking-tight">
              Você acha que com{" "}
              <span className="italic text-gradient-rose animate-shimmer">um simples olhar</span>,
              <br className="hidden sm:block" />
              <span className="font-script font-semibold text-5xl sm:text-7xl md:text-8xl text-gradient-aurora animate-gradient block mt-2">
                pode apaixonar alguém?
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-xl text-foreground/70 italic font-serif-romance max-w-md mx-auto">
              Esta é a nossa história, contada em capítulos.
            </p>

            <div className="mt-8 sm:mt-10">
              <Button
                onClick={start}
                className="rounded-full bg-gradient-rose hover:opacity-95 shadow-romance text-sm sm:text-base px-7 sm:px-9 py-6 sm:py-7 h-auto font-semibold transition-bounce hover:scale-105 active:scale-95 w-full sm:w-auto max-w-sm"
              >
                Descubra essa história ❤️
              </Button>
              <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <ChevronDown className="w-3 h-3 animate-bounce" />
                Role para ver mais
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-20 w-full max-w-3xl">
            <LoveCounter />
          </div>
        </section>
      )}

      {stage === "chapter" && (
        <section className="relative z-10 min-h-[100dvh] flex items-center pt-safe pb-safe">
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
        <section className="relative z-10 min-h-[100dvh] flex items-center pt-safe pb-safe">
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
