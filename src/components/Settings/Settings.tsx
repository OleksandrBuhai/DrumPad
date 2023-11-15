// Pads.tsx

import React from "react";
import { state } from "@/state/state";
import { ButtonSettings } from "./Set/ButtonsSettings";


export const Settings: React.FC = ({  }) => {
  

  return (
    <div className="flex justify-center items-center bg-green-500">
      <div className="grid grid-cols-3 gap-5">
        {state.map((el, index) => (
          <div key={index} className="flex items-center">
            <ButtonSettings keyName={el.name} keyNumber={el.keyCode} src={el.src}            
            />
          </div>
        ))}
      </div>
    </div>
  );
};
