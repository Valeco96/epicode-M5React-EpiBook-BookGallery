import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea() {
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVhY2VjNTk2OGRlNTAwMTU1MmEzYzEiLCJpYXQiOjE3NTM4NjYwNTcsImV4cCI6MTc1NTA3NTY1N30.dDIn-eWyEgno0vui5NWN1IsUQsb1_6HGIyZ53l5mTFA";

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { asin } = useParams();
  // const { selected } = useSelected();
  //  const asin = selected?.asin; // se selected esiste, prendi asin, altrimenti undefined

  useEffect(() => {
    if (!asin) return;

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
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
  }, [asin]); //dipende dal libro selezionato

  console.log("posts: " + JSON.stringify(posts, null, 2));

  // DELETE
  const handleDelete = async (id) => {
    const conferma = window.confirm(
      "Sei sicuro di voler eliminare questa recensione?"
    );
    if (!conferma) return; // se annulla, non fa nulla

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );

      if (!response.ok)
        throw new Error("Errore nell'eliminazione della recensione.");
      // aggiorna lo stato eliminando il commento con quell'id
      setPosts((prevPosts) => prevPosts.filter((c) => c._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE
  const handleUpdateComment = (updatedComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((c) => (c._id === updatedComment._id ? updatedComment : c))
    );
  };

  return (
    <div className="mt-3 p-3 border rounded bg-light h-100">
      {/* AddComment sempre in alto */}
      <div className="mb-4">
        <h6 className="text-black">Aggiungi una recensione:</h6>
        <AddComment asin={asin} onNewComment={setPosts} disabled={!asin} />
      </div>
      {/* Commenti visibili solo se selezionato */}
      {!asin ? (
        <p className="text-muted">
          Seleziona un libro per leggere le recensioni.
        </p>
      ) : (
        <>
          <h6 className="text-black mb-2">Recensioni sul libro:</h6>
          {isLoading && <p>Caricamento in corso...</p>}
          {error && <p>Errore nel caricamento delle recensioni.</p>}
          {!isLoading && !error && (
            <CommentList
              comments={posts}
              onUpdateComment={handleUpdateComment}
              onDelete={handleDelete}
            />
          )}
        </>
      )}
    </div>
  );
}

export default CommentArea;
