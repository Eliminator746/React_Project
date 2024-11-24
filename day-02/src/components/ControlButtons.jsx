
// Create 3 buttons here : Start , Reset , Pause 
export default function ControlButton({ isActive , isPaused , handleResetClick , handlePauseClick , handleStartClick }) {

    const ActiveButton = <div>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handlePauseClick}>{isPaused ? "Resume" : "Pause"}</button>
        
    </div>

    const StartButton = <div>
        <button onClick={handleStartClick}>Start</button>
    </div>

    return <>
        {isActive ? ActiveButton : StartButton}
    </>
}




// function Button({ btn, className, onclick }) {
//     return <button onClick={onclick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ${className}`}>
//         {btn}
//     </button>
// }