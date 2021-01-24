import "../css/components/multipleChoice.css";
const MultipleChoice = ({ question, answers }) => {
  return (
    <div className="container-fluid p-0">
      <h1>{question}</h1>
      {answers.map((ans) => {
        return (
          <div className="row align-items-center no-gutters">
            <div className="col-1 d-flex justify-content-center">
              <input type="radio" name="radio" />
            </div>
            <div className="col">
              <h2>{ans}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
  // <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
  //   <label class="options">
  //     Small Business Owner or Employee
  //     <input type="radio" name="radio" />
  //     <span class="checkmark" />
  //   </label>
  //   <label class="options">
  //     Nonprofit Owner or Employee
  //     <input type="radio" name="radio" />
  //     <span class="checkmark" />
  //   </label>
  //   <label class="options">
  //     Journalist or Activist
  //     <input type="radio" name="radio" />
  //     <span class="checkmark" />
  //   </label>
  //   <label class="options">
  //     Other
  //     <input type="radio" name="radio" />
  //     <span class="checkmark"></span>
  //   </label>
  // </div>
};

export default MultipleChoice;
