import { useState, useEffect } from "react"

export const useBoolean = (initialState) => {
    const [state, setState] = useState(initialState)

    const on = () => setState(true)
    const off = () => setState(false)
    const toggle = () => setState(!state)

    return [state, { on, off, toggle }]
}

export const useNumber = (initialValue, options = { step: 1 }) => {
    const { step } = options
    const [value, setValue] = useState(initialValue)
    const increment = () => setValue(value => value + step)
    const decrement = () => setValue(value => value - step)

    return [value, { increment, decrement }]
}

export const useLegacyState = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    return [value, (value) => setValue(prev => ({ ...prev, value }))]
}

export const useInput = (initialValue = "", options = {}) => {
    const [value, setValue] = useState(initialValue)

    const onChange = event => setValue(event.target.value)

    const { persist } = options
    useEffect(() => {
        persist && setValue(window.localStorage.getItem(persist) || "")
    }, [persist])

    useEffect(() => {
        persist && window.localStorage.setItem(persist, value)
    }, [persist, value])

    return {
        value,
        bindToInput: { value, onChange },
    }
}

export const useTimer = (initialValue) => {
    const [running, { on: start, off: stop }] = useBoolean(false)
    const [value, { increment }] = useNumber(initialValue)

    useEffect(() => {
        if (running) {
            const interval = setInterval(increment, 1000)
            return () => clearInterval(interval)
        }
    }, [running])

    return { value, running, start, stop }

}