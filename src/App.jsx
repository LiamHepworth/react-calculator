import { useState } from "react";

import './App.css'
import Numpad from './components/Numpad'
import Operations from './components/Operations'
import CalcDisplay from './components/CalcDisplay'
import CalcButton from "./components/Button"

let currOp;

function App() {

  let [valueOne, setValueOne] = useState("");
  let [valueTwo, setValueTwo] = useState("");
  let [calcValue, setCalcValue] = useState("");  //to allow the user to continue after clicking equals;
  let [equation, setEquation] = useState("")

  function setOperationType(op){
    currOp = op;
  };

  function handleOperation(){

    if(calcValue === ""){
      if(valueTwo === ""){
        setValueTwo(valueTwo = valueOne);
        setValueOne(valueOne = "");
      } else {
        setValueTwo(valueTwo = currOp(parseFloat(valueTwo), parseFloat(valueOne)));
        setCalcValue(calcValue = valueTwo);
        setValueOne(valueOne = "");
      }
    } else {
      setValueTwo(valueTwo = calcValue);
      setCalcValue(calcValue = "");
    };

    console.log(`value one is ${valueOne} and value two is ${valueTwo}`);
    return valueTwo;
  };

  function drawEquation(val){
    setEquation(equation += val);  //doesn't account for when calcValue is set 
  }

  return(
    <div className="container">

      <CalcDisplay equation={equation}></CalcDisplay>

      <Operations handleOperation={handleOperation} setOperationType={setOperationType} drawEquation={drawEquation}></Operations>

      <div className='container'>
        <Numpad setValueOne={setValueOne}  valueOne={valueOne} drawEquation={drawEquation}/>
        <CalcButton btnType={"operation"} content={"="} onclick={handleOperation}></CalcButton>
      </div>

    </div>
  );
};

export default App