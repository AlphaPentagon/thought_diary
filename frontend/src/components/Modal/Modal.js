import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useContext } from "react";
import ThoughtContext from "../ThoughtContext.js";
import { Link } from "react-router-dom";

const ThoughtModal = ({ thought, handleDelete, thoughtIndex }) => {
  const [show, setShow] = useState(false);
  const [currentThought, setCurrentThought] = useContext(ThoughtContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkDelete = () => {
    let response = prompt(
      `THIS ACTION CANNOT BE UNDONE.\n\nAre you sure you want to delete this thought?\n\nIf you are, then please type 'DELETE' in the box below.\n`
    );
    if (response.toLowerCase() === "delete") {
      handleDelete(thought._id, thoughtIndex);
    } else {
      return;
    }
  };

  const handleUpdate = () => {
    setCurrentThought(thought);
  };

  const date = thought.createdAt.split("").slice(0, 10).join("");
  const time = thought.createdAt.split("").slice(11, 16).join("");
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Show more
      </Button>
      <Modal
        fullscreen="md-down"
        size="lg"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="d-flex justify-content-center modal-bg-color">
          <Modal.Title>
            <q>{thought.situation}</q>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center modal-bg-color">
          <p>
            <span className="fw-bold">Date:</span> {date}
          </p>
          <p>
            <span className="fw-bold">Time:</span> {time}
          </p>
          <p className="text-dark text-muted">
            <span className="fw-bold text-dark">Thought:</span>{" "}
            {thought.thought}
          </p>
          <p className="text-dark text-muted">
            <span className="fw-bold text-dark">Thought belief:</span>{" "}
            {thought.thought_rating}%
          </p>
          <p>
            <span className="fw-bold">Emotions:</span> {thought.emotions}
          </p>
          <p>
            <span className="fw-bold">Behaviours:</span> {thought.behaviours}
          </p>
          <p>
            <span className="fw-bold">Evidence for:</span>{" "}
            {thought.evidence_for}
          </p>
          <p>
            <span className="fw-bold">Evidence against:</span>{" "}
            {thought.evidence_against}
          </p>
          <p className="text-primary">
            <span className="fw-bold text-dark">Balanced thought:</span>{" "}
            {thought.balanced_thought}
          </p>
          <p className="text-primary">
            <span className="fw-bold text-dark">Balanced Thought Belief:</span>{" "}
            {thought.balanced_rating}%
          </p>
        </Modal.Body>
        <Modal.Footer id="modal-bg-color">
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/updateThought">
            <Button variant="outline-info" onClick={handleUpdate}>
              Update
            </Button>
          </Link>
          <Button variant="outline-danger" onClick={checkDelete}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ThoughtModal;
