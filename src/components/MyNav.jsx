import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router";
import { GiBookshelf } from "react-icons/gi";
import { PiBooksLight } from "react-icons/pi";
import { GiAbstract104 } from "react-icons/gi";
import ThemeToggleButton from "./ThemeToggleButton";

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
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="py-4 border-bottom border-white"
    >
      <ThemeToggleButton style={{ marginLeft: 15 }} />
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          end
          className="d-flex gap-2 align-items-center"
        >
          <GiAbstract104 />
          EpiBooks - React
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Container className="d-flex justify-content-end gap-3">
            <div>
              <Form.Label className="text-white">Genere</Form.Label>
              <Form.Select
                className="form-select mb-4"
                value={category}
                onChange={handleCategory}
              >
                {Object.keys(bookGenre).map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </Form.Select>
            </div>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">
                  Ricerca per titolo
                </Form.Label>
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
