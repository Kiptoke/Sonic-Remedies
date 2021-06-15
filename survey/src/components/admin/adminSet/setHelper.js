const setCurrentQuestions = (set, setSet, questions) => {
  let temp_set = set;
  temp_set.questions = questions;
  setSet(temp_set);
};

export { setCurrentQuestions };
