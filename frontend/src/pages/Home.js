import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="heroCard">
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <img
            style={{ width: "4rem" }}
            src="android-chrome-192x192.png"
            alt="Thought Diary logo"
          />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-2">
          <h1 className="text-center">Thought Diary</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <p className="text-center text-muted mb-4">
            An online, guided thought diary app to help you capture and review
            your thoughts. Following CBT principles and best practises.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link to="/newThought">
            <Button variant="outline-primary fw-bold">Get Started</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
