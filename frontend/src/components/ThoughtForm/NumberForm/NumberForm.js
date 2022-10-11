import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const NumberForm = ({ questionText, onChange, input }) => {
  return (
    <Form.Group
      controlId="thoughtForm.ControlRangeInput"
      className="mb-3 d-flex flex-column "
      style={{ height: "19rem" }}
    >
      <Form.Label as="h3" className="pb-5 mb-5">
        {questionText}
      </Form.Label>
      <Container className="d-flex flex-column justify-content-between">
        <p>{`${input}%`}</p>
        <Container className="d-flex flex-row gap-3 mb-3">
          <span>0%</span>
          <Form.Control
            type="range"
            className="form-range"
            onChange={onChange}
            value={input || ""}
            style={{ border: "none" }}
          />
          <span>100%</span>
        </Container>
      </Container>
    </Form.Group>
  );
};

export default NumberForm;
