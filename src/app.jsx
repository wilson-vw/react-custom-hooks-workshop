import React from "react"
import Elevator from "./elevator/elevator"
import Collapsable from "./collapsable/collapsable";
import LoginForm from "./login-form/login-form";
import Counter from "./counter/counter";
import Timer from "./timer/timer";

const App = () => <>
    <h1>Custom Hooks Workshop</h1>
    <br />

    <Collapsable>
        Hey... You are doing it!
    </Collapsable>

    <br /><hr />
    <Counter initialValue={10} />

    <br /><hr />
    <LoginForm onSubmit={data => console.log(data)} />

    <br /><hr />
    <Timer />

    {/* <Elevator speed={1000}/> */}
</>

export default App;