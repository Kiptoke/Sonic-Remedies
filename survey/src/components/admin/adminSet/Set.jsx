import { Row, Col, Button, Container } from "react-bootstrap";
import Icon from "../../common/Icon";
import Trash from "../../../vectors/admin/trash.svg";
import Music from "../../../vectors/admin/file-earmark-music.svg";
import Duplicate from "../../../vectors/admin/clipboard-check.svg";
import EditTitle from "./editTitle";
import { useState } from "react";
import AddQuestion from "./addQuestion";
import ModButton from "../../common/modButton";

const Set = ({
  set,
  index,
  onDeleteSet,
  onDuplicateSet,
  onMusicSwitch,
  onEditTitle,
}) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [mod, setMod] = useState("");
  const { title, music, _id } = set;
  const length = set.questions ? set.questions.length : 0;
  return (
    <Container>
      <Row>
        <Col>
          {!editingTitle ? (
            title
          ) : (
            <EditTitle
              old={title}
              onEditTitle={onEditTitle}
              setEditingTitle={setEditingTitle}
              id={_id}
              index={index}
            ></EditTitle>
          )}
          <Button
            onClick={() => setEditingTitle(!editingTitle)}
            style={{ display: editingTitle ? "none" : "" }}
          >
            Edit Name
          </Button>
        </Col>
        <Col>
          <div>
            <label htmlFor="hasMusic">
              <Icon src={Music} width="2rem" />
            </label>
            <input
              type="checkbox"
              value=""
              id="hasMusic"
              defaultChecked={music}
              onChange={() => onMusicSwitch(_id, !music, index)}
            />
          </div>
        </Col>
        <Col>
          <Row>Number of Questions: {length}</Row>
          <Row>
            <ModButton setMod={setMod} buttonMod="add-q" currentMod={mod}>
              Add Questions
            </ModButton>
          </Row>
          <Row>
            <Button disabled={length === 0}>Remove Questions</Button>
          </Row>
        </Col>
        <Col>
          <Row>Duplicate Set</Row>
          <Row>
            <Button
              onClick={() => {
                onDuplicateSet(set);
              }}
            >
              <Icon src={Duplicate} width="2rem" />
            </Button>
          </Row>
          <Row>Delete Set</Row>
          <Row>
            <Button
              onClick={() => {
                onDeleteSet(_id);
              }}
            >
              <Icon src={Trash} width="2rem" />
            </Button>
          </Row>
        </Col>
      </Row>
      <Row style={{ display: mod ? "" : "none" }}>
        <AddQuestion currentQuestions={set.questions} />
      </Row>
    </Container>
  );
};

export default Set;
