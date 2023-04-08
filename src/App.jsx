import { useState } from "react";

import './App.css'
import Numpad from './components/Numpad'
import Operations from './components/Operations'
import CalcDisplay from './components/CalcDisplay'
import CalcButton from "./components/Button"

function App() {

  let [valueOne, setValueOne] = useState("");
  let [valueTwo, setValueTwo] = useState("");
  let currOp, calculate;

  function setOperationType(op){
    currOp = op;
    return currOp;
  }

  function handleOperation(){

    calculate = currOp();

    if(valueTwo === ""){
      setValueTwo(valueTwo = valueOne);
      setValueOne(valueOne = "")
    } else {
      setValueTwo(valueTwo = calculate(parseInt(valueTwo), parseInt(valueOne)));
      setValueOne(valueOne = "");
    }

    console.log(`value one is ${valueOne} and value two is ${valueTwo}`);
    return valueTwo;
  }

  // function handleOperation(opType){

  //   getCurrentOperation(opType)

  //   if(firstValue === ""){
  //     setFirstValue(firstValue += currValue);
  //     setCurrValue("")
  //     console.log(firstValue + "is the first value")
  //   } else if (secondValue === ""){
  //     setSecondValue(secondValue += currValue);
  //     setCurrValue("")
  //     console.log(secondValue + "is the second value")
  //   } else {
  //     setFirstValue(currOp(parseInt(firstValue), parseInt(secondValue)))
  //     console.log('two vals')
  //     console.log(firstValue + "is the first value")
  //     console.log(secondValue + "is the second value")
  //     setSecondValue("")
  //   }
  // }

  // function calculateOperation(){
  //   console.log(currOp)
  //   // console.log(currOp(1, 2))
  // }

  return(
    <div className="container">

      <CalcDisplay equation = {valueOne}></CalcDisplay>

      <Operations handleOperation={handleOperation} setOperationType={setOperationType}></Operations>

      <div className='container'>
        <Numpad setValueOne = {setValueOne} valueOne = {valueOne}/>
        <CalcButton btnType={"operation"} content={"="} onclick={handleOperation}></CalcButton>
      </div>

    </div>
  )
}

export default App