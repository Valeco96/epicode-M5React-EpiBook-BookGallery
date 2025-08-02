import { Button, Card, Col, Container } from "react-bootstrap";
import { useSelected } from "../context/selectedContext";

function SingleBook({ book }) {
  const { selected, setSelected } = useSelected();

  return (
    <>
      <Container className="mt-4">
        <Card className="h-100">
          <Card.Img
            className={selected == book.asin && "border border-3 border-danger"}
            onClick={() => setSelected(book.asin)}
            variant="top"
            src={book.img}
            style={{ height: 300 }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}</Card.Text>
            <Button variant="primary">Maggiori dettagli</Button>
            <Button
              variat={selected ? "danger" : "success"}
              onClick={() => setSelected(!selected)}
              className="mt-2"
              variant="success"
            >
              {selected ? "Nascondi recensioni" : "Mostra recensioni"}
            </Button>
            {/*Rendering condizionale*/}
            {/*selected && <CommentArea book={book} />*/}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SingleBook;
