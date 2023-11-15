// Pads.tsx

import React from "react";
import { state } from "@/state/state";
import { Pad } from "./Pad/Pad";

interface PadsProps {
  onIntervalChange: (keyNumber: number, interval: number) => void;
}

export const Pads: React.FC<PadsProps> = ({ onIntervalChange }) => {
  

  return (
    <div className="flex justify-center items-center bg-green-500">
      <div className="grid grid-cols-3 gap-5">
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
