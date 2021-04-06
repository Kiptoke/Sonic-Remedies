import Set from "./setUI/set";
import { useState } from "react";
const sets = [
  {
    questions: [
      {
        type: "mc",
        ask: "How are you feeling today?",
        responses: [
          "Cheerful",
          "Reflective",
          "Gloomy",
          "Humorous",
          "Melancholy",
          "Playful",
          "Romantic",
          "Ominous",
          "Calm",
          "Hopeful",
          "Angry",
          "Fearful",
          "Tense",
          "Lonely",
        ],
      },
      {
        type: "ms",
        ask: "Which are cute?",
        responses: ["Pikachu", "Squirtle", "Charizard", "Mewtwo"],
      },
      {
        type: "color",
        ask: "Choose a color?",
        responses: [],
      },
    ],
    hasMusic: true,
  },
  {
    questions: [
      {
        type: "mc",
        ask: "How are you feeling today?",
        responses: ["Cheerful", "Reflective", "Gloomy"],
      },
      { type: "mc", ask: "Sup?", responses: ["NON", "BAH", "HOH"] },
    ],
    hasMusic: true,
  },
];
const Survey = () => {
  const [currentSet, setCurrentSet] = useState(0);
  return (
    <Set
      setId={currentSet}
      set={sets[currentSet]}
      setCurrentSet={setCurrentSet}
    />
  );
};

export default Survey;
