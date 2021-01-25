import { Component } from "react";

import Question from "./question";

import "../css/components/set.css";

class Set extends Component {
  state = {};
  render() {
    return (
      <div className="set">
        <div className="set_questions">
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    );
  }
}

export default Set;
