import React from "react"
import { render, screen, act, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Timer from "./timer"

it("counts when 'start' is pressed and finishes on 'stop'", async () => {
    render(<Timer initialValue={0} />)

    expect(screen.getByText(/Timer is stopped/))
    expect(screen.getByText(/Timer value is 0/))
    userEvent.click(screen.getByText(/start/i))

    await waitFor(() => screen.getByText(/Timer value is 1/), { timeout: 1500 })
    expect(screen.getByText(/Timer is running.../))

    userEvent.click(screen.getByText(/stop/i))

    await screen.findByText(/Timer is stopped/)
})