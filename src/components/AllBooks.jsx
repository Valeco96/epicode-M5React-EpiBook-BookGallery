import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GeneratePages from "./GeneratePages.jsx";
import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

function AllBooks({ filteredBooks, bookGenre }) {
  const numPages = 20;
  const pageNum = Math.ceil(filteredBooks.length / numPages);
  const [active, setActive] = useState(
    parseInt(new URLSearchParams(window.location.seach).get("page")) || 1
  );
  const [booksForPages, setBooksForPages] = useState([]);

  useEffect(() => {
    setBooksForPages(
      filteredBooks.slice((active - 1) * numPages, active * numPages)
    );
  }, [filteredBooks, active]);

  return (
    <>
      {booksForPages.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}

      <GeneratePages pages={pageNum} active={active} setActive={setActive} />
    </>
  );
}

export default AllBooks;
