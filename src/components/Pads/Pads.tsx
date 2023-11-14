

import { state } from "@/state/state"
import { Pad } from "./Pad/Pad"


export const Pads: React.FC = () => {


    return (
        <div className="flex justify-center items-center bg-green-500">
            <div className="grid grid-cols-3 gap-5">
                {state.map((el, index) => {
                    return (
                        <div key={index} className=" flex items-center " >
                            <Pad src={el.src} keyName={el.key} keyNumber={el.keyCode} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}