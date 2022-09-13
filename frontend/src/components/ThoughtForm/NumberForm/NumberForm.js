import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const NumberForm = ({ questionText, onChange, input }) => {
  return (
    <Form.Group controlId="thoughtForm.ControlRangeInput" className="mb-3">
      <Form.Label as="h3">{questionText}</Form.Label>
      <p>{`${input}%`}</p>
      <Container className="d-flex flex-row gap-3 mb-3">
        <span>0%</span>
        <Form.Control
          type="range"
          className="form-range"
          onChange={onChange}
          value={input}
          style={{ border: "none" }}
        />
        <span>100%</span>
      </Container>
    </Form.Group>
  );
};

export default NumberForm;
