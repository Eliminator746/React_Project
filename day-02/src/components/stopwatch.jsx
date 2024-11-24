import { useState } from "react"
import Body from "./Body";

export default function StopWatch() {
    const [timer, setTimer] = useState(0);


//When clicked start btn, another page reload and start the timer
    return <>
        <div>
            <Body id="container">
                <FormatTime timer={timer} />
                <Button onclick={()=>{}} className={"bg-red-500"} btn={"Start"} />
            </Body>
        </div>

    </>
}

function Button({ btn, className , onclick}) {
    return <button onClick={onclick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}>
        {btn}
    </button>
}

// Format the time as "hh:mm:ss"
const FormatTime = ({ timer }) => {
    const hour = Math.floor(timer / 3600)
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
