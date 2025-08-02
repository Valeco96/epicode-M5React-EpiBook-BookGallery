import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GeneratePages from "./GeneratePages.jsx";
import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

function AllBooks({ filteredBooks, bookGenre }) {
  const numPages = 20;
  const pageNum = Math.ceil(filteredBooks.length / numPages);
  const [active, setActive] = useState(
    parseInt(new URLSearchParams(window.location.seach).get("page")) || 1
  );
  const [booksForPages, setBooksForPages] = useState([]);

  useEffect(() => {
    setBooksForPages(
      filteredBooks.slice((active - 1) * numPages, active * numPages)
    );
  }, [filteredBooks, active]);

  return (
    <>
      <Container className="container my-4">
        <GeneratePages pages={pageNum} active={active} setActive={setActive} />
        <Row className="g-4">
          {booksForPages.map((book) => (
            <Col key={book.asin} xs={6} md={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AllBooks;
