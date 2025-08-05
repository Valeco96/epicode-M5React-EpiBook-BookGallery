{
  /*Mostra le recensioni ricevute dall'API qui*/
}
import SingleComment from "./SingleComment";

function CommentList({ comments, onDelete, onUpdateComment }) {
  if (comments === 0) {
    return <p>Nessuna recensione trovata.</p>;
  }

  return (
    <div className="mt-2 mx-4">
      {comments.map((c) => (
        <SingleComment
          key={c._id}
          comment={c}
          onUpdate={onUpdateComment}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default CommentList;
