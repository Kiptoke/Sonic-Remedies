import Set from "./setUI/set";
import { useState, useEffect } from "react";
import getSurveyData from "../utils/getSurveyData";

const Survey = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    getSurveyData().then((result) => {
      setSurveyData(result);
    });
  }, []);

  if (surveyData !== null) {
    const { sets } = surveyData;
    return (
      <Set
        setId={currentSet}
        set={sets[currentSet]}
        nextSet={sets[currentSet + 1]}
        setCurrentSet={setCurrentSet}
        totalSets={sets.length}
      />
    );
  }
  return null;
};

export default Survey;

// {
//   id: (automatically generated),
//   music_arr: [],
//   //sets_arr: [],
//   questions: [[]], //these will not die today. or andy day
//   responses: [[]]
// }
