import { Row, Col, Button, Container } from "react-bootstrap";
import Icon from "../../common/Icon";
import Trash from "../../../vectors/admin/trash.svg";
import Music from "../../../vectors/admin/file-earmark-music.svg";
import Duplicate from "../../../vectors/admin/clipboard-check.svg";
import EditTitle from "./editTitle";
import { useState } from "react";
import AddQuestion from "./addQuestion";
import ModButton from "../../common/modButton";

const mods = [
  { title: "Add Questions", mod: "add-q" },
  { title: "Remove Questions", mod: "rem-q" },
  { title: "View Questions", mod: "view-q" },
];

const Set = ({
  set,
  index,
  onDeleteSet,
  onDuplicateSet,
  onMusicSwitch,
  onEditTitle,
}) => {
  const [editingTitle, setEditingTitle] = useState(false);
  const [currentMod, setCurrentMod] = useState("");
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
          {mods.map((mod) => (
            <Row>
              <ModButton
                setMod={setCurrentMod}
                buttonMod={mod.mod}
                currentMod={currentMod}
                disabled={mod.mod !== "add-q" && length === 0}
              >
                {mod.title}
              </ModButton>
            </Row>
          ))}
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
      <Row style={{ display: currentMod ? "" : "none" }}>
        <AddQuestion currentQuestions={set.questions} />
      </Row>
    </Container>
  );
};

export default Set;
