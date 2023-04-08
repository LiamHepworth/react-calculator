const CalcDisplay = (props) => {
    return ( 
        <div id="display-container" className="container">
            <span className="container display">
                {props.equation}
            </span>

        </div>
     );
}
 
export default CalcDisplay;