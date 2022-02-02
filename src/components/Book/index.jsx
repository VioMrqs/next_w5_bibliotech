import { useState } from "react";
import { FaHeart, FaPlusCircle } from "react-icons/fa";

const Book = (props) => {
  const { book } = props;

  const [isFav, setFavorite] = useState(book.isFav);
  const [read, setRead] = useState(book.read);

  const handleSetWish = () => {
      book.read = !book.read;
      setRead(book.read);  
    };

  const handleSetFavorite = () => {
      book.isFav = !book.isFav;
      setFavorite(book.isFav);    
    };

  return (
    <div className="Book">
      <h3>{book.title}</h3>
      <h3>{book.isFav}</h3>
      <h3>{book.read ? "coucou" : "pas coucou"}</h3>

      <img src={book.thumbnailUrl} alt="lecture"></img>
      <p className="BookDescription">{book.shortDescription}</p>
      <button onClick={handleSetFavorite}>
        {book.isFav ? "Je dé-favorise " : "Je favorise "}
        <FaHeart />
      </button>
      <button onClick={handleSetWish}>
        {book.read ? "Je ne souhaite plus " : "Je souhaite "}
        <FaPlusCircle />
      </button>
    </div>
  );
};

export default Book
