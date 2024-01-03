import { useState } from "react";
import CountController from "./CountController";

const Counter = () => {
    const [count, setCount] = useState(0);

    const counterEvent = (operation) => {

        if(operation === "-") {
            setCount((oldCount) => {
                return --oldCount;
            });
        } else if(operation === "+") {
            setCount((oldCount) => {
                return ++oldCount;
            });
        } 
    }

    return <div className="counter">
        <h3>{count}</h3>
        <CountController counterEvent={counterEvent}></CountController>
    </div>
}

export default Counter;