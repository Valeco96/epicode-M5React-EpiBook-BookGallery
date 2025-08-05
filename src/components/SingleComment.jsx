import { Button, Card } from "react-bootstrap";
import { Link } from "react-router";
import UpdateComment from "./UpdateComment";

function SingleComment({ comment, onUpdate, onDelete }) {
  return (
    <>
      <Card className="mb-2 shadow-sm">
        <Card.Body>
          <Card.Text>{comment.comment}</Card.Text>
          <footer className="blockquote-footer">
            {comment.author} &nbsp; | &nbsp; 🌟 Voto: {comment.rate}
          </footer>
        </Card.Body>
      </Card>
      <UpdateComment className="mb-4" comment={comment} onSave={onUpdate} />
      <Button
        onClick={() => onDelete(comment._id)}
        className="btn-danger m-2"
      >
        Elimina
      </Button>
    </>
  );
}

export default SingleComment;
