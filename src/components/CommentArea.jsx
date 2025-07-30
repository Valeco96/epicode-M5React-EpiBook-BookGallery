import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({ book }) {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhY2VjNTk2OGRlNTAwMTU1MmEzYzEiLCJpYXQiOjE3NTM4NjYwNTcsImV4cCI6MTc1NTA3NTY1N30.dDIn-eWyEgno0vui5NWN1IsUQsb1_6HGIyZ53l5mTFA";

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );

        if (!response.ok)
          throw new Error("Errore nel caricamento dei commenti");
        const data = await response.json();
        setPosts(data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [book.asin]); //dipende dal libro selezionato

  return (
    <div className="mt-3 p-2 border rounded bg-light">
      <h6>Recensioni su {book.title}:</h6>

      {isLoading && <p>Caricamento in corso...</p>}
      {error && <p>Errore nel caricamento delle recensioni.</p>}

      {!isLoading && !error && (
        <>
          <CommentList comments={posts} />
          <AddComment asin={book.asin} onNewComment={setPosts} />
        </>
      )}
    </div>
  );
}

export default CommentArea;
