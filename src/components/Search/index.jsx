import { useState } from "react";
import BooksList from "../BooksList";

const Search = ({ data }) => {
  const [searchField, setSearchField] = useState("");

  const filteredData = data.books[0].filter((book) =>
    book.title.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="Search">
      <input
        className="SearchInput"
        type="search"
        placeholder="Rechercher..."
        onChange={handleChange}
      />
      {filteredData.length === 0
        ? "Pas d'élus - retente ta chance"
        : filteredData.length + " élus"}
      <BooksList data={filteredData} />
    </div>
  );
};

export default Search;
