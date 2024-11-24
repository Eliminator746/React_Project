import { useEffect, useState } from "react"
import { FormatTime } from "./Timer"
import ControlButton from "./ControlButtons";

export default function StopWatch() {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(true)

    useEffect(()=>{
        let value;
        if(isActive && !isPaused){
             value=setInterval(()=>{setTimer(c=>c+1)},100)
        }
       

        return ()=>{
            clearInterval(value);
        }
    },[isActive,isPaused])

    const handleResetClick = () => {
        setIsActive(false)
        setTimer(0)
    }
    const handlePauseClick = () => {
        setIsActive(true)
        setIsPaused(!isPaused);
    }
    const handleStartClick = () => {
        setIsActive(true) // this will active -> active btns means another set of btns will be shown in UI
        setIsPaused(false)
    }

    //When clicked start btn, another page reload and start the timer : wrong concept
    //When clicked switch to another set of buttons using if-else
    return <>
        <div>
            <div id="container">
                <FormatTime timer={timer} />
                <ControlButton isActive={isActive} isPaused={isPaused} handleStartClick={handleStartClick} handlePauseClick={handlePauseClick} handleResetClick={handleResetClick} />
            </div>
        </div>

    </>
}



