import { useEffect, useRef, useState } from "react";
import { Pause, Play, Music } from "lucide-react";

interface MusicPlayerProps {
  src: string;
  title: string;
  artist?: string;
}

const MusicPlayer = ({ src, title, artist }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <div className="flex items-center gap-3 glass rounded-full pl-1.5 pr-4 py-1.5 shadow-card w-full sm:w-auto">
      <button
        type="button"
        onClick={toggle}
        className="rounded-full bg-gradient-rose hover:opacity-90 shadow-romance h-11 w-11 flex items-center justify-center text-primary-foreground shrink-0 transition-bounce active:scale-90"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </button>
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <Music className={`w-4 h-4 text-primary shrink-0 ${playing ? "animate-pulse" : ""}`} />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold truncate leading-tight">{title}</span>
          {artist && <span className="text-[11px] text-muted-foreground truncate">{artist}</span>}
        </div>
      </div>
      <audio ref={audioRef} src={src} loop preload="none" />
    </div>
  );
};

export default MusicPlayer;
