// Pad.tsx
import { selectButtonIntervals, setButtonInterval } from '@/slice/intervalSlice/intervalSlice';
import { RootState } from '@/slice/store';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


interface PadType {
  keyName: string;
  keyNumber: number;
  src: string;
}
export const Pad: React.FC<PadType> = ({ src, keyName, keyNumber }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const buttonIntervals = useSelector(selectButtonIntervals);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const clickHandler = () => {
    playSound();
    console.log(keyNumber)
    audioRef.current?.play()
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.keyCode === keyNumber) {
      playSound();
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
    }
  };

  useEffect(() => {
    const handleKeyDown: EventListener = (e) => keyHandler(e as unknown as React.KeyboardEvent);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if(buttonIntervals[keyNumber] ){
    useEffect(() => {
      // Оновлюємо інтервал кнопки в Redux
      dispatch(setButtonInterval({ keyNumber, interval: buttonIntervals[keyNumber] || 2000 }));
  
      // Логіка для відтворення звуку за інтервалом
      const intervalId = setInterval(() => {
        playSound();
      }, buttonIntervals[keyNumber] || 2000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [buttonIntervals[keyNumber]]);
  }
 


  return (
    <div className={`bg-${isClicked ? 'green' : 'red'}-500 text-white w-[7rem] h-[5rem] flex items-center justify-center`} onClick={clickHandler}>
      <audio ref={audioRef} src={src} preload="auto"></audio>
      {keyName}
    </div>
  );
};
