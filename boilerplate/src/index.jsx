import React from "react"
import ReactDOM from "react-dom"

const App = () =>
    <>
        <h1>React Boilerplate</h1>
        <span>by <b>Wilson Mália</b></span>
    </>

const wrapper = document.getElementById("app")
wrapper ? ReactDOM.render(<App />, wrapper) : false;
