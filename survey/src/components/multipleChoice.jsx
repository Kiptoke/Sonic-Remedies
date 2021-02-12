import "../css/components/multipleChoice.scss";
const MultipleChoice = ({ ask, responses }) => {
  return (
    <div className="question-mc container-fluid p-0">
      <h1>{ask}</h1>
      {responses.map((res) => {
        return (
          <div key={res} className="row align-items-center no-gutters">
            <div className="col">
              <h2>{res}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
