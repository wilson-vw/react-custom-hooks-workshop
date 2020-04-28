import React from "react"
import { useInput } from "../hooks/hooks"

const LoginForm = ({ onSubmit }) => {
    const user = useInput("", { persist: "username" })
    const password = useInput()

    const onLogin = () => {
        onSubmit({ user: user.value, password: password.value })
    }
    return (
        <div>
            <label htmlFor="user">User</label>
            <input {...user.bindToInput} id="user" type="text" placeholder="User" />
            <label htmlFor="password">Password</label>
            <input {...password.bindToInput} id="password" type="text" placeholder="User" />
            <button onClick={onLogin}>Login</button>
        </div>
    )
}

export default LoginForm