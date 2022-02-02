import { useState } from "react";
import Book from "../Book";

const BooksList = ({ data }) => {  
  const [filterFav, setFilterFav] = useState(false);
  const [filterWish, setFilterWish] = useState(false);

  const handleSetFilterFav = () => {
    filterFav === true ? setFilterFav(false) : setFilterFav(true);
  };

  const handleSetFilterWish = () => {
    filterWish === true ? setFilterWish(false) : setFilterWish(true);
  };

  const booksList = data.books[0];

  if(filterFav === true){
    booksList.filter(e => e.isFav === true)
  }

  if (filterWish === true) {
    booksList.filter((e) => e.read === true);
  }

  return (
    <div className="Librairie">
      <button onClick={handleSetFilterFav}>
        {filterFav ? "Tous les livres" : "Mes favoris"}
      </button>
      <button onClick={handleSetFilterWish}>
        {filterWish ? "Tous les livres" : "Mes souhaits de lecture"}
      </button>
      <div className="BookGrid">
        {booksList.map((book) => (
          <Book book={book}/>
        ))}
        ;
      </div>
    </div>
  );
};;

export default BooksList;
