import { useRef } from "react";
import hitSound from '@/assets/padAssets/Heater-1.mp3'


export const Test:React.FC = () => {
    
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSound = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; 
        audioRef.current.play();
      }
    };
  
    return (
      <div>
        {/* Preload the audio to reduce latency */}
        <audio ref={audioRef} src={hitSound} preload="auto"></audio>
        <button onClick={playSound}>Click me to play sound</button>
      </div>
    );
}