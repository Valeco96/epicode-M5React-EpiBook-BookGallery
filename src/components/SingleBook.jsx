import { Button, Card, Col, Container } from "react-bootstrap";
import { useState } from "react";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Container className="mt-4">
        <Card className="h-100">
          <Card.Img
            className={selected && "border border-3 border-danger"}
            onClick={() => setSelected(!selected)}
            variant="top"
            src={book.img}
            style={{ height: 300 }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}</Card.Text>
            <Button variant="primary">Maggiori dettagli</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SingleBook;
