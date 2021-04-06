import Set from "./setUI/set";
import { useState, useEffect } from "react";
import getSets from "../utils/getSets";
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
    music: true,
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
    music: true,
  },
];
const Survey = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [_sets, setSets] = useState(null);

  useEffect(() => {
    setSets(getSets())
  }, [])
  
  return (
    <Set
      setId={currentSet}
      set={sets[currentSet]}
      setCurrentSet={setCurrentSet}
    />
  );
};

export default Survey;

{
  id: (automatically generated),
  music_arr: [],
  //sets_arr: [],
  questions: [[]], //these will not die today. or andy day
  responses: [[]]
}