const CalcButton = (props) => {
  return (
    <button className="btn btn-secondary" value={props.btntype} onClick={props.onclick}>
      {props.content}
    </button>
  )
}

export default CalcButton
