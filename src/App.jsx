// import { useState } from "react";

import './App.css'
import Numpad from './components/Numpad'
import Operations from './components/Operations'
import CalcDisplay from './components/CalcDisplay'
import CalcButton from "./components/Button"

function App() {

  // let [currValue, setCurrValue] = useState("");

  return(
    <div className="container">

      <CalcDisplay></CalcDisplay>
      
      <Operations></Operations>

      <div className='container'>
        <Numpad></Numpad>
        <CalcButton btnType={"operation"} content={"="}></CalcButton>
      </div>

    </div>
  )

}

export default App
