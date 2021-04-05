import AnimatedNote from "./animatedNote";
import { useState, useEffect } from "react";

const NoteAnimator = () => {
  const numActive = 32;
  const timeActive = numActive * 200;

  const initNotes = [];
  for (let i = 0; i < numActive; i++) {
    initNotes.push(
      <AnimatedNote key={i} delay={(i * timeActive) / numActive} />
    );
  }
  const [Notes, setNotes] = useState(initNotes);
  useEffect(() => {
    const generator = setInterval(() => {
      const Notes_temp = Notes;
      setNotes([]);
      setNotes(Notes_temp);
    }, timeActive);
    return () => clearInterval(generator);
  });
  return Notes.map((Note) => Note);
};

export default NoteAnimator;
