import CalcButton from "./Button"

const Operations = ({handleOperation, setOperationType}) => {

    const ops = [
        {op: "+",
         method: function addition(a, b){
            return a + b;
         }       
        },
        {op: "-",
         method: function subtraction(a, b){
            return a - b;
         }       
        },
        {op: "*",
         method: function multiplication(a, b){
            return a * b;
         }       
        },
        {op: "/",
         method: function division(a, b){
            return a / b;
         }       
        },
    ]

    return ( 
        <div className="container">
            {ops.map((ops) => (
                <CalcButton content={ops.op} key={ops.op} btnType={"operation"} 
                    onclick={function(){ 
                        handleOperation();
                        setOperationType(ops.method);
                    }
                }/>
            ))}
        </div>
     );
}
 
export default Operations;