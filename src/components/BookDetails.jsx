import CommentArea from "./CommentArea";
import { useParams } from "react-router";
import NotFound from "./NotFound";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";

// unisco tutti i libri in un unico array
const books = [...fantasy, ...horror, ...romance, ...scifi, ...history];

function BookDetails() {
  const { asin } = useParams();

  // trova il libro corrispondente
  const asinFinder = books.find((b) => b.asin === asin);

  if (!asinFinder) {
    return <NotFound />;
  }

  return (
    <>
      <h1 className="text-center m-5">{asinFinder.title}</h1>
      <CommentArea />
    </>
  );
}

export default BookDetails;
