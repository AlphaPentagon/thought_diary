import Form from "react-bootstrap/Form";

const TimeForm = ({ questionText, onChange, input }) => {
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
        size="lg"
        id="forms-bg-color"
        className="opacity-75"
        type="time"
        onChange={onChange}
        value={input || ""}
        style={{
          width: "min(16rem, 100%)",
          margin: "7rem auto 5rem auto",
          height: "6rem",
        }}
      />
    </Form.Group>
  );
};

export default TimeForm;
