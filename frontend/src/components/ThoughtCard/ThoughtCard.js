import Card from "react-bootstrap/Card";
import { useState } from "react";
import ThoughtModal from "../../components/Modal/Modal.js";

const ThoughtCard = ({ thought, index, handleDelete }) => {
  const [isHovering, setIsHovering] = useState(false);

  // const date = thought.createdAt.split("").slice(0, 10).join("");
  // const time = thought.createdAt.split("").slice(11, 16).join("");
  const date = thought.date.split("-").reverse().join("-");
  const time = thought.time;

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
      <Card className="text-center mb-3 " style={{ height: "20rem" }}>
        <Card.Header className="text-mute">{`${date} | ${time}`}</Card.Header>
        <Card.Body className="d-flex flex-column justify-content-between opacity-75">
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
                className="text-info mb-4"
              >{`"${thought.balanced_thought}"`}</Card.Text>
              <Card.Text as="h5">{thought.balanced_rating}%</Card.Text>
            </div>
          )}
          <ThoughtModal
            thought={thought}
            thoughtIndex={index}
            handleDelete={handleDelete}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThoughtCard;
