import { useState } from "react";
import AdminSet from "./AdminSet";
import AddSet from "./AddSet";
import NewQuestion from "./NewQuestion";
import ChangeOrder from "./ChangeOrder";
import DeleteQuestion from "./DeleteQuestion";
import { Button, Container, ListGroup } from "react-bootstrap";

const AdminSets = ({
  sets,
  onDelete,
  onDuplicate,
  onAddSet,
  onNewQuestion,
  onOrderChanged,
}) => {
  const [showAddSet, setShowAddSet] = useState(false);
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [showChangeOrder, setShowChangeOrder] = useState(false);
  const [deleteQuestions, setDeleteQuestions] = useState(false);

  const handleClick = () => {
    setShowAddSet(!showAddSet);
  };

  const handleManageQuestions = () => {
    setShowAddQuestion(!showAddQuestion);
  };

  const handleChangeOrder = () => {
    setShowChangeOrder(!showChangeOrder);
  };

  const onChangeOrder = (sets) => {
    setShowChangeOrder(false);
    onOrderChanged(sets);
  };

  const handleDeleteQuestion = () => {
    setDeleteQuestions(!deleteQuestions);
  };

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>Hello</ListGroup.Item>
        <ListGroup.Item>
          <Container>
            <Button>+</Button>
          </Container>
        </ListGroup.Item>
      </ListGroup>
      {/* <Button className="big-btn" onClick={() => handleClick()}>
          Create New Set
        </Button>
        <Button className="big-btn" onClick={() => handleChangeOrder()}>
          Change Set Order
        </Button>
        <Button className="big-btn" onClick={() => handleManageQuestions()}>
          Create New Question
        </Button>
        <Button className="big-btn" onClick={() => handleDeleteQuestion()}>
          Delete a Question
        </Button> */}
    </Container>
  );
  // <div className="admin-sets">
  //   <div className="modify-whole">
  //     <h1>Modify as a Whole:</h1>

  //     {showAddSet && (
  //       <AddSet onAddSet={onAddSet} setShowAddSet={setShowAddSet} />
  //     )}
  //     {showAddQuestion && (
  //       <NewQuestion
  //         onNewQuestion={onNewQuestion}
  //         setShowAddQuestion={setShowAddQuestion}
  //       />
  //     )}
  //     {showChangeOrder && (
  //       <ChangeOrder curquestions={sets} onChangeOrder={onChangeOrder} />
  //     )}
  //     {deleteQuestions && (
  //       <DeleteQuestion handleDeleteQuestion={handleDeleteQuestion} />
  //     )}
  //   </div>
  //   <div className="modify-parts">
  //     <h1>View/Modify Individual Sets:</h1>
  //     <div className="sets">
  //       {sets.map((set) => (
  //         <AdminSet
  //           qid={set._id}
  //           key={set._id}
  //           set={set}
  //           onDelete={onDelete}
  //           onDuplicate={onDuplicate}
  //           onOrderChanged={onOrderChanged}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // </div>
};

export default AdminSets;
