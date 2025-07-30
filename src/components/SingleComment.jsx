import { Card } from "react-bootstrap";

function SingleComment({ comment }) {
  return (
    <Card className="mb-2 shadow-sm">
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <footer className="blockquote-footer">
          {comment.author} &nbsp; | &nbsp; Voto: {comment.rate}
        </footer>
      </Card.Body>
    </Card>
  );
}

export default SingleComment;
