import React from "react"
import { render, act, waitFor } from "@testing-library/react"
import { useElevator } from "./elevator"

const setup = () => {
    const hook = {}
    const Elevator = () => {
        Object.assign(hook, useElevator(500))
        return null
    }
    render(<Elevator />)
    return hook
}

it("opens door and goes to selected floor", async () => {
    const elevator = setup()
    expect(elevator.door.isOpen).toBe(false)

    act(() => {
        elevator.door.open()
    })
    expect(elevator.door.isOpen).toBe(true)

    expect(elevator.floor.current).toBe(1)
    act(() => {
        elevator.floor.bindToInput.onChange({ target: { value: "3" } })
        elevator.floor.go()
    })

    await waitFor(() => {
        expect(elevator.door.isOpen).toBe(false)
        expect(elevator.floor.current).toBe(2)
    })

    await waitFor(() => {
        expect(elevator.door.isOpen).toBe(true)
        expect(elevator.floor.current).toBe(3)
    })

})