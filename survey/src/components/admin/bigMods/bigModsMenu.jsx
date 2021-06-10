import { Row, Col, Container } from "react-bootstrap";
import ModButton from "../../common/modButton";
import Icon from "../../common/Icon";
import Trash from "../../../vectors/admin/trash.svg";
import Plus from "../../../vectors/admin/plus.svg";
import Reorder from "../../../vectors/admin/list-ol.svg";

const mods = [
  { title: "Create a New Set", mod: "new-set", icon: Plus },
  { title: "Reorder Sets", mod: "reorder", icon: Reorder },
  { title: "Create a New Question", mod: "new-q", icon: Plus },
  { title: "Delete a Question", mod: "delete-q", icon: Trash },
];

const BigModsMenu = ({ bigMod, setBigMod }) => {
  return (
    <Container>
      <Row>
        {mods.map((mod) => (
          <Col key={mod.mod}>
            <Row>{mod.title}</Row>
            <Row>
              <ModButton
                buttonMod={mod.mod}
                currentMod={bigMod}
                setMod={setBigMod}
              >
                <Icon src={mod.icon} />
              </ModButton>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BigModsMenu;
