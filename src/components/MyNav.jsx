import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router";

function MyNav({
  category,
  setCategory,
  searchValue,
  setSearchValue,
  handleSearch,
  handleCategory,
  bookGenre,
}) {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" end>
          EpiBooks - React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Container className="container my-4">
            <Form.Select
              className="form-select mb-3"
              value={category}
              onChange={handleCategory}
            >
              {Object.keys(bookGenre).map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </Form.Select>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Ricerca</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Cerca il tuo libro"
                  onChange={handleSearch}
                  value={searchValue}
                />
              </Form.Group>
            </Form>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
