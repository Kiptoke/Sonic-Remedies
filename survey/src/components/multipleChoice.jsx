import "../css/components/multipleChoice.scss";
const MultipleChoice = ({ responses }) => {
  return (
    <div className="question-mc container-fluid p-0">
      {responses.map((res) => {
        return (
          <div key={res} className="option">
            {res}
            <div className="radar"></div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleChoice;
