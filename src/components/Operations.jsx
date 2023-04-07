import CalcButton from "./Button"

const Operations = () => {
    return ( 
        <div className="container">
            <CalcButton btnType={"operation"} content={"+"}></CalcButton>
            <CalcButton btnType={"operation"} content={"-"}></CalcButton>
            <CalcButton btnType={"operation"} content={"*"}></CalcButton>
            <CalcButton btnType={"operation"} content={"/"}></CalcButton>
        </div>
     );
}
 
export default Operations;