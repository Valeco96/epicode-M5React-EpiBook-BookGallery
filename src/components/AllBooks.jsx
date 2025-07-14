import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import { useState } from "react";

function AllBooks() {
  console.log(fantasy);

  return (
    <>
      <Container className=",t-4">
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
      </Container>
    </>
  );
}

export default AllBooks;
