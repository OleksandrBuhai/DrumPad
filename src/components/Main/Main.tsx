
import { Pads } from "@/components/Pads/Pads"
import { Settings } from "@/components/Settings/Settings"


export const Main:React.FC = () => {
    return (
        <div className="w-[60rem] h-[30rem] bg-black flex justify-center items-center">
            <div className="grid grid-cols-2 gap-5 w-full h-full " >
            <Pads/>
            <Settings/>
            </div>
        </div>
    )
}