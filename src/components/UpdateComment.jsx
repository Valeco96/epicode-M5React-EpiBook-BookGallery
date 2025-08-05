import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function UpdateComment({ comment, onSave }) {
  const [show, setShow] = useState(false);
  const [newText, setNewText] = useState(comment.comment); // per inizializzare con il testo attuale
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhY2VjNTk2OGRlNTAwMTU1MmEzYzEiLCJpYXQiOjE3NTM4NjYwNTcsImV4cCI6MTc1NTA3NTY1N30.dDIn-eWyEgno0vui5NWN1IsUQsb1_6HGIyZ53l5mTFA";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            comment: newText,
          }),
        }
      );
      
      if (!response.ok)
        throw new Error("Errore nella modifica della recensione.");

      const updated = await response.json();

      //aggiorna la lista del componente padre
      onSave(updated);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Modifica recensione
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica il tuo commento:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editCommentTextArea">
              <Form.Label>Scrivi qui il tuo commento aggiornato:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salva modifica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateComment;
