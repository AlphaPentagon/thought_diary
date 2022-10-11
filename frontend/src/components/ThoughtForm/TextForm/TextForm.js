import Form from "react-bootstrap/Form";

const TextForm = ({ questionText, placeholderText, onChange, input }) => {
  return (
    <Form.Group
      // controlId="thoughtForm.ControlTextarea"
      d-fluid="lg"
      className="mb-3 mx-auto"
    >
      <Form.Label as="h3" className="mb-3">
        {questionText}
      </Form.Label>
      <Form.Control
        id="forms-bg-color"
        className="opacity-75"
        style={{ height: "16rem" }}
        as="textarea"
        onChange={onChange}
        value={input || ""}
        placeholder={placeholderText}
      />
    </Form.Group>
  );
};

export default TextForm;
