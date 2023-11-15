import React from "react";
import { Pads } from "@/components/Pads/Pads";
import { Settings } from "../Settings/Settings";


export const Main: React.FC = () => {
  const handleIntervalChange = (keyNumber: number, interval: number) => {
    console.log(`Button ${keyNumber} interval changed to ${interval} seconds`);
  };

  return (
    <div className="w-[80rem] h-[50rem] md:h-[30rem] flex justify-center items-center ">
      <div className="flex  flex-col md:grid md:grid-cols-2 gap-5 w-full  h-full ">
        <Pads onIntervalChange={handleIntervalChange} />
        <Settings />
      </div>
    </div>
  );
};