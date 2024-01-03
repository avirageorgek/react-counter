const CountController = (props) => {
    const handleCounter = (operation) => {
        if(operation === "-") {
            props.counterEvent("-");
        } else if(operation === "+") {
            props.counterEvent("+");
        }
    }


    return <div className="btnHolder">
        <a className="countController" onClick={() => {handleCounter("-")}}>
            -
        </a>
        <a className="countController" onClick={() => {handleCounter("+")}}>
            +
        </a>
    </div> 
    
}

export default CountController;