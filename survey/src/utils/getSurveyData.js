import API from "../services/api-client.js";
import getAndSortSets from "../utils/orderSets";

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
        id: my_q._id,
        config: my_q.config,
      });
    });
    new_sets.push({ questions: new_questions, music: set.music });
  });
  return { sets: new_sets };
};

const getSurveyData = async () => {
  const sets = await getAndSortSets();
  const questions = await API.getAll("questions/idict");
  return convertSurveyData(sets, questions);
};
export default getSurveyData;
