import { useEffect, useState } from "react"

export default function HomePage() {
    const [timer, setTimer] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (timer == 0)
            return
        const value = setInterval(() => { setTimer(c => c - 1) }, 1000)

        return () => {
            clearInterval(value)
        }
    }, [timer])
    return <>
        <div id="container" className=" flex flex-col justify-evenly items-center bg-slate-300 p-5">
            <div className="text-8xl py-5">timer : {timer}</div>
            <div className="text-6xl pb-5">{count}</div>

            <Button onclick={() => {
                setTimer(10)
                setCount(0)

            }} disabled={timer !== 0} btn={"Start"} className={"bg-yellow-300"} />



            <Button onclick={() => {
                setCount(c => c + 1)

            }} disabled={timer === 0} btn={"Click Me!"} />


            <Button onclick={() => {
                setTimer(0)
                setCount(0)

            }} btn={"Reset"} className={"bg-pink-500"} />


        </div>

    </>
}

function Button({ btn, className, onclick, disabled }) {
    return <button onClick={onclick} disabled={disabled} className={`bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 border border-blue-700 rounded ${className} w-[20%] max-w-lg`}>
        {btn}
    </button>
}