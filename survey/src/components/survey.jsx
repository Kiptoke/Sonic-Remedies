import Set from "./setUI/set";
import { useState, useEffect } from "react";
import getSurveyData from "../utils/getSurveyData";
import API from "../services/api-client";

const Survey = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    getSurveyData().then((result) => {
      setSurveyData(result);
    });
  }, []);

  //make post request with user responses
  const postResponse = (answers) => {
    console.log(surveyData)

    let question_arr = []
    let question_types_arr = []
    let music_arr = []
    let num_questions_arr = []
    let formatted_answers = []

    for (let i = 0; i < surveyData.sets.length; i++) {
      let cur_set = surveyData.sets[i]
      //array of every piece of music in the survey
      if (cur_set.music) {
        music_arr.push("music included")
      }
      else {
        music_arr.push("no music included")
      }
      //number of questions associated with each piece of music
      num_questions_arr.push(cur_set.questions.length)
      //all questions
      for (let j = 0; j < cur_set.questions.length; j++) {
        question_arr.push(cur_set.questions[j].id)
        question_types_arr.push(cur_set.questions[j].type)
      }
    }

    //format answers
    for (let i = 0; i < answers.length; i++) {
      if (question_types_arr[i] === "multiple-choice" || question_types_arr[i] === "color") {
        formatted_answers.push(answers[i].toString())
      }
      else if (question_types_arr[i] === "short-answer") {
        formatted_answers.push(answers[i])
      }
      else if (question_types_arr[i] === "check-box") {
        let str = ""
        for (let j = 0; j < answers[i].length; j++) {
          if (answers[i][j]) {
            str += "1"
          }
          else {
            str += "0"
          }
        }
        formatted_answers.push(str)
      }
    }

    const response = {
      musicids: music_arr,
      questionGroups: num_questions_arr,
      questions: question_arr,
      answers: formatted_answers
    }
    console.log(response)
    const posted = API.post("responses", response)
  }

  if (surveyData !== null && surveyData !== undefined) {
    const { sets } = surveyData;
    return (
      <Set
        setId={currentSet}
        set={sets[currentSet]}
        nextSet={sets[currentSet + 1]}
        setCurrentSet={setCurrentSet}
        totalSets={sets.length}
        postResponse={postResponse}
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
