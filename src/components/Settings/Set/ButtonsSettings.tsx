import React, { useRef, useState } from 'react';

interface ButtonSettingsProps {
  keyName: string;
  keyNumber: number;
  src: string;
  interval: string | undefined;
  setPlayInterval: (e: string | undefined) => void;
}

export const ButtonSettings: React.FC<ButtonSettingsProps> = ({ src, keyName, interval, setPlayInterval }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [inputValue, setInputValue] = useState<string | undefined>(interval);
  const [isIntervalSet, setIsIntervalSet] = useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

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
    const intervalValue = parseFloat(inputValue!);
    console.log(intervalValue * 1000);

    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current); // Clear any existing interval
    }

    intervalIdRef.current = setInterval(() => {
      playSound();
    }, intervalValue * 1000);

    setIsIntervalSet(true); // Set the interval state to true
  };

  const stopPlay = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      setIsIntervalSet(false); // Set the interval state to false
    }
    setInputValue(''); // Reset the input value to empty
  };

  const buttonColor = isIntervalSet ? 'bg-[#5c0000]' : 'bg-black';
  const shadowColor = isIntervalSet ? 'shadow-lg shadow-cyan-500' : 'shadow-lg shadow-white'


  return (
    <div className={`${buttonColor} hover:bg-[#240046] rounded-xl w-[10rem] text-white 
    shadowmd md:shadow-lg ${shadowColor}`}>
      <div className='flex flex-col justify-center items-center p-2 '>
        <span className='cursor-pointer text-center' onClick={clickHandler}>{keyName}</span>
        <audio ref={audioRef} src={src} preload="auto"></audio>
        <label className='flex flex-col gap-2'>
          Interval:
          <input
            className='w-[5rem] rounded-md text-black'
            type="number"
            step="0.1"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
              setPlayInterval(e.currentTarget.value);
            }}
          />
          <div className='flex flex-row gap-5 item'>
            <button className='p-1 rounded-md bg-green-700' onClick={intervalPlay}>set</button>
            <button className='p-1 rounded-md bg-red-700' onClick={stopPlay}>off</button>
          </div>
        </label>
      </div>
    </div>
  );
};