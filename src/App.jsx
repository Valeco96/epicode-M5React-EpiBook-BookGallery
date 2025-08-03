import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import CommentArea from "./components/CommentArea";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import { useState } from "react";
import { SelectedProvider } from "./context/selectedContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const bookGenre = {
  Fantasy: fantasy,
  Horror: horror,
  Romance: romance,
  SciFi: scifi,
  History: history,
};

function App() {
  const [category, setCategory] = useState(`Fantasy`);
  const [searchValue, setSearchValue] = useState(``);
  const [filteredBooks, setFilteredBooks] = useState(bookGenre[category]);
  const [theme, setTheme] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const books = bookGenre[category].filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredBooks(books);
  };
  const handleCategory = (e) => {
    setSearchValue("");
    setCategory(e.target.value);
    setFilteredBooks(bookGenre[e.target.value]);
  };
  function toggleTheme() {
    if (theme == "dark") {
      setTheme("light");
      setTextColor("dark");
    } else {
      setTheme("dark");
      setTextColor("light");
    }
  }

  return (
    <>
      <MyNav
        category={category}
        setCategory={setCategory}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
        handleCategory={handleCategory}
        bookGenre={bookGenre}
      />
      <ThemeProvider>
        <Welcome />
        <SelectedProvider>
          <Container fluid className="my-4">
            <Row>
              {/* Colonna libri */}
              <Col md={8} className="border-end">
                <AllBooks filteredBooks={filteredBooks} bookGenre={bookGenre} />
              </Col>
              {/* Colonna commenti sticky */}
              <Col md={4}>
                <div className="sticky-comment-area">
                  <CommentArea TextColor={textColor} />
                </div>
              </Col>
            </Row>
          </Container>
        </SelectedProvider>
      </ThemeProvider>

      <MyFooter />
    </>
  );
}

export default App;
