import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <Nav variant="tabs" defaultActiveKey={location.pathname} className="mb-3">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/diary">Thought Diary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newThought">Log a Thought</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Navbar;
