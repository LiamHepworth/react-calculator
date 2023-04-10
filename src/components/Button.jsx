const CalcButton = (props) => {
  return (
    <button className="button btn btn-primary col" type={"button"} value={props.btntype} onClick={props.onclick}>
      {props.content}
    </button>
  )
}

export default CalcButton
