import API from "../services/api-client";
import formatAnswer from "./formatAnswer";
import sendCSV from "./sendCSV";

const calculateMusicIndex = (music_i, questionGroups) => {
  let i = 0;
  let count = 0;
  if (questionGroups[i]) count = questionGroups[i];
  while (music_i >= count) {
    count += questionGroups[i];
    i += 1;
  }
  console.log(music_i, i);
  return i;
};

const dLoadData = async () => {
  const responses = await API.getAll("responses");
  const questions = await API.getAll("questions");
  const pieces = await API.getAll("music");
  if (responses.length && questions.length) {
    let formatted_resps = [];
    for (let response_i = 0; response_i < responses.length; response_i++) {
      const response = responses[response_i];
      const id = response._id;
      for (let i = 0; i < response.questions.length; i++) {
        const piece = pieces.find(
          (piece) =>
            piece !== null &&
            piece._id ===
              response.musicids[calculateMusicIndex(i, response.questionGroups)]
        );
        const question = questions.find(
          (q) => q !== null && q._id === response.questions[i]
        );
        let answer = "";
        if (!question) continue;
        if (question.options.length === 0) answer = response.answers[i];
        else {
          answer = formatAnswer(question.options, response.answers[i]);
        }
        for (let j = 0; j < question.options; j++) {}
        formatted_resps.push({
          userId: id,
          pieceInfo: piece ? JSON.stringify(piece) : "No Music",
          questionTitle: question.title,
          answer: answer,
        });
      }
    }
    sendCSV(formatted_resps);
  }
};

export default dLoadData;
