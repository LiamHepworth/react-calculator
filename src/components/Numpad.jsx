import { useState } from "react";
import CalcButton from "./Button"

const numpadButtons = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", ".", "C"],
]

const Numpad = ({setValueOne, valueOne, drawEquation}) => {

  function handleClick(char){
    setValueOne(valueOne += char)
  }

  return (
    <div className="container">

      <div id="row row-one">
        {numpadButtons[0].map((char) => (
          <CalcButton btnType={"input"}  key={char} content={char} 
          onclick={() => {
            handleClick(char) //works by passing the "char" value from the map function back to the "handleClick" function when the button is clicked.
            drawEquation(char)
          }}/>  
        ))}
      </div>

      <div id="row row-two">
        {numpadButtons[1].map((char) => (
          <CalcButton btnType={"input"}  key={char} content={char} 
          onclick={() => {
            handleClick(char) 
            drawEquation(char)
          }}/> 
        ))}
      </div>

      <div id="row row-three">
        {numpadButtons[2].map((char) => (
          <CalcButton btnType={"input"}  key={char} content={char} 
          onclick={() => {
            handleClick(char) 
            drawEquation(char)
          }}/> 
        ))}
      </div>

      <div id="row row-four">
        <CalcButton btnType={"input"} key={"0"} content={"0"} 
        onclick={() => {
            handleClick(numpadButtons[3][0]) 
            drawEquation(numpadButtons[3][0])
          }}/>
        <CalcButton btnType={"input"} key={"."} content={"."} 
          onclick={() => {
            handleClick(numpadButtons[3][1]) 
            drawEquation(numpadButtons[3][1])
          }}/>
        <CalcButton btnType={"operation"} key={"C"} content={"C"} 
          onclick={() => {
            handleClick(numpadButtons[3][2]) 
            drawEquation(numpadButtons[3][2])
          }}
        />
      </div>
    </div>
    
  )
}

export default Numpad 