import React from "react"
import { useTimer } from "../hooks/hooks"

const Timer = () => {
    const { value, running, start, stop } = useTimer(0)
    return (
        <div>
            <p>{!running ? "Timer is stopped" : `Timer is running...`}</p>
            <p>{`Timer value is ${value}`}</p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default Timer