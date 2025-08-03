import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import BookDetails from "./components/BookDetails";
import CommentArea from "./components/CommentArea";
import NotFound from "./components/NotFound";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import { useState, useEffect } from "react";
import { SelectedProvider } from "./context/selectedContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router";

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
  const [textColor, setTextColor] = useState("white");
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

  useEffect(() => {
    document.body.dataset["bsTheme"] = theme;
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <MyNav
          category={category}
          setCategory={setCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
          handleCategory={handleCategory}
          bookGenre={bookGenre}
        />
        <ThemeProvider value={{ theme, textColor }}>
          <Welcome />
          {/* Pulsante globale per cambiare tema */}
          <div className="text-center my-3">
            <ThemeToggleButton />
          </div>
          <SelectedProvider>
            <Container fluid className="my-4">
              <Routes>
                <Route
                  path="/"
                  element={
                    <AllBooks
                      filteredBooks={filteredBooks}
                      bookGenre={bookGenre}
                    />
                  }
                />
                <Route path="/books/:asin" element={<BookDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </SelectedProvider>
        </ThemeProvider>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
