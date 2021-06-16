import ChangeOrder from "./changeOrder";
import NewSet from "./newSet";
import NewQuestion from "./newQuestion";
import DeleteQuestion from "./deleteQuestion";

const BigMods = ({
  type,
  sets,
  setSets,
  allQuestions,
  setAllQuestions,
  setBigMod,
  onChangeOrder,
  onAddSet,
  onNewQuestion,
}) => {
  const middle = (next) => {
    return (...input) => {
      setBigMod("");
      if (next) next(...input);
    };
  };
  switch (type) {
    default:
      return null;
    case "new-set":
      return <NewSet onAddSet={middle(onAddSet)} />;
    case "new-q":
      return <NewQuestion onNewQuestion={middle(onNewQuestion)} />;
    case "reorder":
      return (
        <ChangeOrder
          curquestions={sets}
          onChangeOrder={middle(onChangeOrder)}
        />
      );
    case "delete-q":
      return (
        <DeleteQuestion
          allQuestions={allQuestions}
          setAllQuestions={setAllQuestions}
          sets={sets}
          setSets={setSets}
          onDeleteQuestion={middle()}
        />
      );
  }
};

export default BigMods;
