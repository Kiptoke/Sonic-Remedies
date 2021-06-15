const QuetsionView = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h1>{question.title}</h1>
      <h2 style={{ fontStyle: "italic" }}>{question.input_type}</h2>
      {question.options.map((opt) => (
        <li>{opt}</li>
      ))}
    </div>
  );
};

export default QuetsionView;
