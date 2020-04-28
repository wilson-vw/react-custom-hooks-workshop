import React from "react"
import { useNumber } from "../hooks/hooks"

const Counter = ({ initialValue = 0, step = 1 }) => {
    const [count, { increment, decrement }] = useNumber(initialValue, { step })
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{`current value is: ${count}`}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter