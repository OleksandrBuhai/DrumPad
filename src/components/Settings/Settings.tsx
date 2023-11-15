import React, { useState } from "react";
import { state } from "@/state/state";
import { ButtonSettings } from "./Set/ButtonsSettings";

export const Settings: React.FC = ({}) => {
  const [intervals, setIntervals] = useState<{ [key: number]: string | undefined }>({});


  const setPlayInterval = (key: number, value: string | undefined) => {
    setIntervals((prevIntervals) => ({ ...prevIntervals, [key]: value }));
  };


  return (
    <div className="flex justify-center items-center bg-[#172132] 
    shadow-2xl shadow-white
    rounded-xl p-5">
      <div className="grid grid-cols-3 gap-5">
        {state.map((el, index) => (
          <div key={index} className="flex items-center">
            <ButtonSettings
              keyName={el.name}
              keyNumber={el.keyCode}
              src={el.src}
              interval={intervals[el.keyCode]}
              
              setPlayInterval={(value) => setPlayInterval(el.keyCode, value)}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};
