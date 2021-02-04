import { Component } from "react";

import MultipleChoice from "./multipleChoice";

import "../css/components/set.css";
import "../css/components/set_DT.css";

class Set extends Component {
  state = {};
  render() {
    return (
      <div className="set">
        <div className="set_questions">
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
        </div>
      </div>
    );
  }
}

export default Set;
