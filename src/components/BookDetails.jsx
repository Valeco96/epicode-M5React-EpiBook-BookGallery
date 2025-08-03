import CommentArea from "./CommentArea";
import { useParams } from "react-router";

function BookDetails() {
  const { asin } = useParams();

  return (
    <>
      <h1>{asin}</h1>
      <CommentArea />
    </>
  );
}

export default BookDetails;
