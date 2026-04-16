import { useEffect, useRef, useState } from "react";
import { Pause, Play, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 shadow-soft border border-primary/10">
      <Button
        type="button"
        onClick={toggle}
        size="icon"
        className="rounded-full bg-gradient-rose hover:opacity-90 shadow-romance h-10 w-10"
        aria-label={playing ? "Pausar música" : "Tocar música"}
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
      </Button>
      <div className="flex items-center gap-2 min-w-0">
        <Music className="w-4 h-4 text-primary shrink-0" />
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-medium truncate">{title}</span>
          {artist && <span className="text-xs text-muted-foreground truncate">{artist}</span>}
        </div>
      </div>
      <audio ref={audioRef} src={src} loop preload="none" />
    </div>
  );
};

export default MusicPlayer;
