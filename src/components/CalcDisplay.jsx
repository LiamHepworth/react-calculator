const CalcDisplay = (props) => {
    return ( 
        <div id="display-container" className="container">
            <h1 className="display h1">
                {props.equation}
            </h1>

        </div>
     );
}
 
export default CalcDisplay;