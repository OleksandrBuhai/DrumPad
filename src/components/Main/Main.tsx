// Main.tsx

import React from "react";
import { Pads } from "@/components/Pads/Pads";
import { Settings } from "../Settings/Settings";


export const Main: React.FC = () => {
  const handleIntervalChange = (keyNumber: number, interval: number) => {
    console.log(`Button ${keyNumber} interval changed to ${interval} seconds`);
  };

  return (
    <div className="w-[60rem] h-[30rem] bg-black flex justify-center items-center">
      <div className="grid grid-cols-2 gap-5 w-full h-full">
        <Pads onIntervalChange={handleIntervalChange} />
        <Settings />
      </div>
    </div>
  );
};
