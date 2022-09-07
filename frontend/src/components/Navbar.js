import Nav from "react-bootstrap/Nav";

const Navbar = () => {
  return (
    <header>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/diary">Thought Diary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newThought">Log a new thought</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Navbar;
