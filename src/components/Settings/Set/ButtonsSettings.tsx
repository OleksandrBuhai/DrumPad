import React, { useRef, useState } from 'react';

interface ButtonSettingsProps {
  keyName: string;
  keyNumber: number;
  src: string;
}

export const ButtonSettings: React.FC<ButtonSettingsProps> = ({ src, keyName, keyNumber }) => {
  const [interval, setPlayInterval] = useState<string | undefined>('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const clickHandler = () => {
    playSound();
    audioRef.current?.play();
  };

  const intervalPlay = () => {
    const intervalValue = parseFloat(interval!);
    console.log(intervalValue * 1000);
    setInterval(() => {
      playSound();
    }, intervalValue * 1000);
  };

  return (
    <div className="bg-yellow-500">
      <h4>Button Settings</h4>
      <div>
        <p onClick={clickHandler}>Button {keyName}</p>
        <audio ref={audioRef} src={src} preload="auto"></audio>
        <label>
          Interval (seconds):
          <input
            type="number"
            step="0.1" 
            value={interval}
            onChange={(e) => {
              setPlayInterval(e.currentTarget.value);
            }}
          />
          <button onClick={intervalPlay}>set interval</button>
        </label>
      </div>
    </div>
  );
};
