import AnimatedNote from "./animatedNote";
import { useState, useEffect } from "react";
import calculateFinalPositions from "./calculateFinalPositions";

const NoteAnimator = () => {
  const initNotes = [];
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const final_positions = calculateFinalPositions(colors.length);

  const numActive = colors.length;
  const timeActive = numActive * 400;
  for (let i = 0; i < numActive; i++) {
    initNotes.push(
      <AnimatedNote
        key={i}
        delay={(i * timeActive) / numActive}
        noteColor={colors[i]}
        finalPosition={final_positions[i]}
      />
    );
  }
  const [Notes, setNotes] = useState(initNotes);
  useEffect(() => {
    const generator = setInterval(() => {
      const Notes_temp = Notes;
      setNotes([]);
      setNotes(Notes_temp);
    }, timeActive + 1000);
    return () => clearInterval(generator);
  });
  return Notes.map((Note) => Note);
};

export default NoteAnimator;
