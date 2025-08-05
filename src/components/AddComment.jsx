import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function AddComment({ asin, onNewComment, disabled }) {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhY2VjNTk2OGRlNTAwMTU1MmEzYzEiLCJpYXQiOjE3NTM4NjYwNTcsImV4cCI6MTc1NTA3NTY1N30.dDIn-eWyEgno0vui5NWN1IsUQsb1_6HGIyZ53l5mTFA";
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disabled || !asin) return; // blocco se non c’è un libro

    const newReview = {
      comment: comment,
      rate: rate,
      elementId: asin,
    };

    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(newReview),
        }
      );

      if (res.ok) {
        alert("Ora sappiamo cosa ne pensi!");
      }
      if (!res.ok) {
        throw new Error("Errore nell'invio della recensione");
      }

      const savedComment = await res.json();

      //Aggiorna la lista dei commenti in CommentArea
      onNewComment((prev) => [...prev, savedComment]);

      //reset del form
      setComment("");
      setRate(1);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3 mx-4">
      <Form.Group className="mb-2 ">
        <Form.Label className="text-black">
          📖 Scrivi la tua recensione
        </Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Inserisci un commento..."
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label className="text-black">🌟 Voto:</Form.Label>
        <Form.Select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="success">
        Invia la recensione
      </Button>
    </Form>
  );
}

export default AddComment;
