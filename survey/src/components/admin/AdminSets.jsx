import { useState } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Set from "./adminSet/Set";
import BigMods from "./bigMods/bigMods";
import BigModsMenu from "./bigMods/bigModsMenu";

const AdminSets = ({
  sets,
  onDelete,
  onDuplicate,
  onAddSet,
  onNewQuestion,
  onChangeOrder,
  onMusicSwitch,
  onEditTitle,
}) => {
  const [bigMod, setBigMod] = useState("");

  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          <h1>Survey Modification Menus</h1>
          <BigModsMenu bigMod={bigMod} setBigMod={setBigMod} />
        </ListGroup.Item>
        <ListGroup.Item>
          <BigMods
            type={bigMod}
            sets={sets}
            setBigMod={setBigMod}
            onChangeOrder={onChangeOrder}
            onAddSet={onAddSet}
            onNewQuestion={onNewQuestion}
          ></BigMods>
        </ListGroup.Item>
        <ListGroup.Item>
          <h1>Survey Sets</h1>
          <Row>
            <Col>Set Name</Col>
            <Col>Has Music?</Col>
            <Col>Edit Questions</Col>
            <Col>Duplicate or Delete Set</Col>
          </Row>
        </ListGroup.Item>
        {sets.map((set, i) => (
          <Container>
            <ListGroup.Item key={set._id}>
              <Set
                set={set}
                index={i}
                onDeleteSet={onDelete}
                onDuplicateSet={onDuplicate}
                onMusicSwitch={onMusicSwitch}
                onEditTitle={onEditTitle}
              ></Set>
            </ListGroup.Item>
          </Container>
        ))}
      </ListGroup>
    </Container>
  );
};

export default AdminSets;
