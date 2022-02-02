import { useState } from "react";
import Book from "../Book";

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
    let booksList = data.books[0];
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
      <button onClick={handleSetFilterFav}>
        {filterFav ? "Tous les livres" : "Mes favoris"}
      </button>
      <button onClick={handleSetFilterRead}>
        {filterRead ? "Tous les livres" : "Mes souhaits"}
      </button>
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

// {
//   () => {
//     if (filterFav === true) {
//       return booksList
//         .filter((e) => e.isFav === true)
//         .map((book) => <Book book={book} />);
//     } else if (filterRead === true) {
//       return booksList
//         .filter((e) => e.read === true)
//         .map((book) => <Book book={book} />);
//     } else if (filterRead === true && filterFav === true) {
//       return booksList
//         .filter((e) => e.isFav === true && e.read === true)
//         .map((book) => <Book book={book} />);
//     }
//     return booksList.map((book) => <Book book={book} />);
//   };
// }
