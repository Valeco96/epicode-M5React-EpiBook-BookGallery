import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllBooks from "./components/AllBooks";
import fantasy from "./data/fantasy.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";
import history from "./data/history.json";
import { useState } from "react";

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
      <Welcome />
      <AllBooks filteredBooks={filteredBooks} bookGenre={bookGenre} />
      <MyFooter />
    </>
  );
}

export default App;
