import { useState } from "react";

import './App.css'
import Numpad from './components/Numpad'
import Operations from './components/Operations'
import CalcDisplay from './components/CalcDisplay'
import CalcButton from "./components/Button"

function App() {

  let [currValue, setCurrValue] = useState("");

  return(
    <div className="container">

      <CalcDisplay equation = {currValue}></CalcDisplay>

      <Operations></Operations>

      <div className='container'>
        <Numpad setCurrValue = {setCurrValue} currValue = {currValue} onClick = {console.log(currValue)} />
        <CalcButton btnType={"operation"} content={"="}></CalcButton>
      </div>

    </div>
  )
}

export default App