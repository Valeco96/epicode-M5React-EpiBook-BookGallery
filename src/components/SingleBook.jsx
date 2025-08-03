import { Button, Card, Col, Container } from "react-bootstrap";
import { useSelected } from "../context/selectedContext";

function SingleBook({ book }) {
  const { selected, setSelected } = useSelected();

  const isSelected = selected?.asin === book.asin;

  return (
    <>
      <Col sm={12} md={6} lg={3} className="mt-4">
        <Card
          className={
            "h-100 " + (isSelected ? "border border-3 border-danger" : "")
          }
        >
          <Card.Img
            onClick={() => setSelected(isSelected ? null : book)}
            variant="top"
            src={book.img}
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}</Card.Text>
            <Button variant="primary">Maggiori dettagli</Button>
            <Button
              variat={selected ? "danger" : "success"}
              onClick={() => setSelected(isSelected ? null : book)}
            >
              {isSelected ? "Nascondi recensioni" : "Mostra recensioni"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default SingleBook;
