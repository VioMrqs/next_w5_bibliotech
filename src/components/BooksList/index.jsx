import { useState } from "react";
import Book from "../Book";
import Button from "../Button";

const BooksList = ({ data }) => {
  const [filterFav, setFilterFav] = useState(false);
  const [filterRead, setFilterRead] = useState(false);

  const handleSetFilterFav = () => {
    filterFav === true ? setFilterFav(false) : setFilterFav(true);
  };

  const handleSetFilterRead = () => {
    filterRead === true ? setFilterRead(false) : setFilterRead(true);
  };

  const defineBookList = () => {
    let booksList = data;
    if (filterFav === true && filterRead === true) {
      return (booksList = booksList.filter(
        (e) => e.isFav === true && e.read === true
      ));
    } else if (filterFav === true) {
      return (booksList = booksList.filter((e) => e.isFav === true));
    } else if (filterRead === true) {
      return (booksList = booksList.filter((e) => e.read === true));
    }
    return booksList;
  };

  return (
    <div className="Librairie">
      <Button
        onClick={handleSetFilterFav}
        text={filterFav ? "Tous les livres" : "Mes favoris"}
      />
      <Button
        onClick={handleSetFilterRead}
        text={filterRead ? "Tous les livres" : "Mes souhaits"}
      />
      <div className="BookGrid">
        {defineBookList().map((book) => (
          <Book book={book} />
        ))}
        ;
      </div>
    </div>
  );
};

export default BooksList;
