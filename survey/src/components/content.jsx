function Content(props) {
  if (props.input_type === "multiple-choice") {
    return <h3>Multiple Choice :D</h3>;
  }

  if (props.input_type === "short-answer") {
    return <h3>Short Answer :D</h3>;
  }

  if (props.input_type === "long-answer") {
    return <h3>Long Answer :D</h3>;
  }

  if (props.input_type === "check-box") {
    return <h3>Checkbox :D</h3>;
  }
}

export default Content;
