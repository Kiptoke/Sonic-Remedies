import { Component, Fragment } from "react";
import MultipleChoice from "./multipleChoice";

class Survey extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <MultipleChoice
          className="question"
          question="If Tom has 3 apples and gives 2 of them to Martha, how many does Martha have if she started with 2 more apples than Tom?"
          answers={["Three.", "Four.", "Seven."]}
        />
        <MultipleChoice
          question="Who let the dogs out?"
          answers={[
            "Roof Roof Roof",
            "Ruuuuuffff Riff RRIIAF",
            "Rough -CAFK BLARK",
            "What? Stupid Question.",
          ]}
        />
      </Fragment>
    );
  }
}

export default Survey;
