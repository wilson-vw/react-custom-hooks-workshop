import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import LoginForm from "./login-form"

it("submits the user and password when pressing 'login'", async () => {
    const onSubmitMock = jest.fn()

    render(<LoginForm onSubmit={onSubmitMock} />)

    const user = screen.getByLabelText(/user/i)
    await userEvent.type(user, "Rodolfo Matias")

    const password = screen.getByLabelText(/password/i)
    await userEvent.type(password, "Amor de Mãe")

    userEvent.click(screen.getByText(/login/i))

    expect(onSubmitMock).toHaveBeenCalledWith({
        user: "Rodolfo Matias",
        password: "Amor de Mãe"
    })
    expect(onSubmitMock).toHaveBeenCalledTimes(1)
})