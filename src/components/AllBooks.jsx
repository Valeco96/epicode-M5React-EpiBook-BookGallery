import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import { useState } from "react";
import SingleBook from "./SingleBook";

const bookGenre = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi: scifi,
  History: history,
};

function AllBooks() {
  const [category, setCategory] = useState(`Fantasy`);
  const [searchValue, setSearchValue] = useState(``);
  const [filteredBooks, setFilteredBooks] = useState(bookGenre[category]);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const books = bookGenre[category].filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(books);
  };
  const handleCategory = (e) => {
    setSearchValue("");
    setCategory(e.target.value);
    setFilteredBooks(bookGenre[e.target.value]);
  };

  console.log(fantasy);

  return (
    <>
      <div className="container my-4">
        <select
          className="form-select mb-3"
          value={category}
          onChange={handleCategory}
        >
          {Object.keys(bookGenre).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

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

        <Row className="g-4">
          {filteredBooks.map((book) => (
            <Col xs={6} md={3}>
              <SingleBook key={book.asin} book={book} />
            </Col>
          ))}
        </Row>
      </div>
      {/*<Container className="mt-4">
        <Row className="g-4">
          {fantasy.map((book) => (
            <Col xs={6} md={3} key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" src={book.img} className="h-100" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Prezzo: {book.price}</Card.Text>
                  <Button variant="primary">Maggiori dettagli</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>*/}
    </>
  );
}

export default AllBooks;
