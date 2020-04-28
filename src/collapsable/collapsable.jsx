import React from "react"
import { useBoolean } from "../hooks/hooks"

const Collapsable = ({ children }) => {
    const [show, { toggle }] = useBoolean(false)
    return <div>
        <button onClick={toggle}>{!show ? "Show" : "Hide"}</button>
        {show && children}
    </div>
}

export default Collapsable