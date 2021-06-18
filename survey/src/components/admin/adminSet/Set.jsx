import { Row, Col, Button, Container } from "react-bootstrap";
import Icon from "../../common/Icon";
import Trash from "../../../vectors/admin/trash.svg";
import Music from "../../../vectors/admin/file-earmark-music.svg";
import Duplicate from "../../../vectors/admin/clipboard-check.svg";
import EditTitle from "./editTitle";
import { useState } from "react";
import AddQuestion from "./addQuestion";
import RemoveQuestion from "./removeQuestion";
import ChangeOrder from "../bigMods/changeOrder";
import ModButton from "../../common/modButton";
import { setCurrentQuestions } from "./setHelper";
import ViewQuestions from "./viewQuestions";
import API from "../../../services/api-client";

const mods = [
  { title: "Add Questions", mod: "add-q" },
  { title: "Remove Questions", mod: "rem-q" },
  { title: "Order Questions", mod: "ord-q" },
  { title: "View Questions", mod: "view-q" },
];

const Set = ({
  inSet,
  index,
  onDeleteSet,
  onDuplicateSet,
  onMusicSwitch,
  onEditTitle,
  allQuestions,
}) => {
  const [set, setSet] = useState(inSet);
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
          <Row>No. Questions in Set: {length}</Row>
          {mods.map((mod) => (
            <Row key={mod.mod}>
              <ModButton
                setMod={setCurrentMod}
                buttonMod={mod.mod}
                currentMod={currentMod}
                disabled={
                  (mod.mod !== "add-q" && length === 0) ||
                  (mod.mod === "add-q" && length >= allQuestions.length)
                }
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
      <Row>
        {currentMod === "add-q" && (
          <AddQuestion
            setCurrentQuestions={(newQuestions) => {
              setCurrentQuestions(set, setSet, newQuestions);
              setCurrentMod("");
            }}
            currentQuestions={set.questions}
            allQuestions={allQuestions}
            id={set._id}
          />
        )}
        {currentMod === "rem-q" && (
          <RemoveQuestion
            setCurrentQuestions={(newQuestions) => {
              setCurrentQuestions(set, setSet, newQuestions);
              setCurrentMod("");
            }}
            currentQuestions={set.questions}
            allQuestions={allQuestions}
            id={set._id}
          />
        )}
        {currentMod === "ord-q" && (
          <div>
            <h1>Order Questions</h1>
            <ChangeOrder
              curquestions={set.questions.map(
                (qid) => allQuestions.filter((q) => q._id === qid)[0]
              )}
              onChangeOrder={(out) => {
                let temp_set = set;
                let q_temp = out.map((q) => q._id);
                temp_set["questions"] = q_temp;
                setSet(temp_set);
                setCurrentMod("");
                API.putOne("sets", set._id, temp_set);
              }}
            />
          </div>
        )}
        {currentMod === "view-q" && (
          <ViewQuestions
            questions={set.questions.map(
              (qid) => allQuestions.filter((q) => q._id === qid)[0]
            )}
          />
        )}
      </Row>
    </Container>
  );
};

export default Set;
