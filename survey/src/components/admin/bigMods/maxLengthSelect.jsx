import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const lengths = [25, 50, 100, 200, 300];

const MaxLengthSelect = ({ config, setConfig }) => {
  return (
    <Container>
      <Row>
        <h2>Select Short Answer Max Character Length</h2>
      </Row>
      <Row>
        {lengths.map((len) => (
          <Col key={len}>
            <input
              type="radio"
              name="maxLength"
              value={len}
              defaultChecked={len === 25}
              onChange={() => {
                config["maxLength"] = len;
                setConfig(config);
              }}
            />
            <label>{len}</label>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MaxLengthSelect;
