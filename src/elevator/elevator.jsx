import React from "react"

const useElevator = () => {
    
}

const Elevator = () => {
    const { door, floor } = useElevator(1000)
    return (
        <div>
            <h1>Current Floor: {floor.current}</h1>
            <div>
                <button onClick={door.open}>Open</button>
                <span>{door.isOpen ? "[_]" : "]["}</span>
            </div>
            {
                door.isOpen &&
                <div>
                    <input {...floor.bindToInput} type="number" placeholder="Floor" />
                    <button onClick={floor.go}>Go</button>
                </div>
            }
        </div >
    )
}

export default Elevator