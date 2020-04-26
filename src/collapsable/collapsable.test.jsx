import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import Collapsable from "./collapsable"

it("shows and hides the content", () => {
    render(
        <Collapsable>
            Hey There!
        </Collapsable>
    )

    expect(screen.getByText("Show")).toBeInTheDocument()
    expect(screen.queryByText("Hey There!")).not.toBeInTheDocument()
    
    fireEvent.click(screen.getByText("Show"))
    
    expect(screen.getByText("Hide")).toBeInTheDocument()
    expect(screen.queryByText("Hey There!")).toBeInTheDocument()
})