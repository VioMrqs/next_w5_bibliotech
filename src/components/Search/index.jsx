import { useState } from "react";
import BooksList from '../BooksList'

const Search = ({data}) => {
  
  const [searchField, setSearchField] = useState("");

  const filteredData = data.books[0].filter((book) => book.title.toLowerCase().includes(searchField.toLowerCase()));

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="Search">
      <input
        type="search"
        placeholder="Dans ma bibliotech il y a..."
        onChange={handleChange}
      />
      <BooksList data={filteredData} />
    </div>
  );
}

export default Search;
