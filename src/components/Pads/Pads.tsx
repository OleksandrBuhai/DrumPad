import React from "react";
import { state } from "@/state/state";
import { Pad } from "./Pad/Pad";

interface PadsProps {
  onIntervalChange: (keyNumber: number, interval: number) => void;
}

export const Pads: React.FC<PadsProps> = () => {
  

  return (
    <div className="flex justify-center items-center bg-black rounded-xl md:shadow-2xl md:shadow-cyan-500 p-5">
      <div className="grid grid-cols-3 md:grid md:grid-cols-3 gap-10">
        {state.map((el, index) => (
          <div key={index} className="flex items-center">
            <Pad
              src={el.src}
              keyName={el.key}
              keyNumber={el.keyCode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};