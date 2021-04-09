const convertSurveyData = (sets, questions) => {
  let new_sets = [];
  sets.forEach((set) => {
    let new_questions = [];
    set.questions.forEach((question) => {
      const my_q = questions[question];
      new_questions.push({
        ask: my_q.title,
        responses: my_q.options,
        type: my_q.input_type,
      });
    });
    new_sets.push({ questions: new_questions, music: set.music });
  });
  return { sets: new_sets };
};

const getSurveyData = async () => {
  return Promise.all([
    fetch("http://localhost:5000/sets"),
    fetch("http://localhost:5000/questions/idict"),
  ])
    .then((responses) => {
      return responses[0]
        .json()
        .then((sets) =>
          responses[1].json().then((questions) => {
            return convertSurveyData(sets, questions);
          })
        )
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
};
export default getSurveyData;
