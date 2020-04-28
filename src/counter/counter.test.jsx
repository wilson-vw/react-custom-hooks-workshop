import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./counter"

it("increments the value when pressing +", () => {
    render(<Counter />)

    expect(screen.getByText("+")).toBeInTheDocument()
    expect(screen.getByText(/current value is: 0/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText("+"))

    expect(screen.getByText(/current value is: 1/i)).toBeInTheDocument()
})

it("decrement the value when pressing -", () => {
    render(<Counter initialValue={1}/>)

    expect(screen.getByText("-")).toBeInTheDocument()
    expect(screen.getByText(/current value is: 1/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText("-"))

    expect(screen.getByText(/current value is: 0/i)).toBeInTheDocument()
})

it("changes the value by the amount specified", () => {
    render(<Counter initialValue={0} step={1000}/>)

    expect(screen.getByText("+")).toBeInTheDocument()
    expect(screen.getByText(/current value is: 0/i)).toBeInTheDocument()
    
    fireEvent.click(screen.getByText("+"))
    expect(screen.getByText(/current value is: 1000/i)).toBeInTheDocument()
})