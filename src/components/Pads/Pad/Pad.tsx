import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

interface PadType {
  keyName: string;
  keyNumber: number;
  src: string;
}

export const Pad: React.FC<PadType> = ({ src, keyName, keyNumber }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const clickHandler = () => {
    playSound();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Знімаємо клас через 300 мс
  };

  const keyHandler = (e: KeyboardEvent) => {
    if (e.keyCode === keyNumber) {
      playSound();
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); // Знімаємо клас через 300 мс
    }
  };

  useEffect(() => {
    const handleKeyDown: EventListener = (e) => keyHandler(e as unknown as KeyboardEvent);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const startInterval = () => {
    const id = window.setInterval(() => {
      playSound();
    }, 1000);

    setIntervalId(id);
  };

  const stopInterval = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div
      className={`bg-${isClicked ? "green" : "red"}-500 text-white w-[7rem] h-[5rem] flex items-center justify-center`}
      onClick={clickHandler}
    >
      <audio ref={audioRef} src={src} preload="auto"></audio>

      {keyName}
      {/* <button className='bg-green-500' onClick={startInterval}>Start Playing Every 4 Seconds</button>
      <button className="bg-red-500" onClick={stopInterval}>Stop Playing</button> */}
    </div>
  );
};
