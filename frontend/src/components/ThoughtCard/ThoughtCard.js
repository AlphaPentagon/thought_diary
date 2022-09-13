import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const ThoughtCard = ({ thought, index, handleDelete }) => {
  const [isHovering, setIsHovering] = useState(false);
  const date = thought.createdAt.split("").slice(0, 10).join("");
  const time = thought.createdAt.split("").slice(11, 16).join("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ cursor: "pointer" }}
    >
      <Card className="text-center mb-3" style={{ height: "20rem" }}>
        <Card.Header className="text-mute">{`${date} | ${time}`}</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="mb-3">{thought.situation}</Card.Title>

          {!isHovering ? (
            <div>
              <Card.Text
                as="h6"
                className="text-secondary mb-4"
              >{`"${thought.thought}"`}</Card.Text>
              <Card.Text as="h6">{thought.thought_rating}%</Card.Text>
            </div>
          ) : (
            <div>
              <Card.Text
                as="h5"
                className="text-primary mb-4"
              >{`"${thought.balanced_thought}"`}</Card.Text>
              <Card.Text as="h5">{thought.balanced_rating}%</Card.Text>
            </div>
          )}

          {/* <p>Emotions: {thought.emotions}</p>
          <p>Behaviours: {thought.behaviours}</p>
          <p>Evidence for: {thought.evidence_for}</p>
          <p>Evidence against: {thought.evidence_against}</p>
          <p>Balanced thought: {thought.balanced_thought}</p>
          <p>Balanced Thought Belief: {thought.balanced_rating}%</p> */}
          <Button
            variant="outline-danger"
            onClick={() => {
              handleDelete(thought._id, index);
            }}
          >
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThoughtCard;
