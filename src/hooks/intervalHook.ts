/* // intervalHook.ts
import { useState } from 'react';

export const useButtonIntervals = () => {
  const [buttonIntervals, setButtonIntervals] = useState<{ [keyNumber: number]: number }>({});

  const handleIntervalChange = (keyNumber: number, interval: number): void => {
    setButtonIntervals((prevIntervals) => ({ ...prevIntervals, [keyNumber]: interval * 1000 }));
  };

  return { buttonIntervals, handleIntervalChange } as const;
};
 */