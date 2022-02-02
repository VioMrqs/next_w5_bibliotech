import { useState } from "react";
import { FaHeart, FaPlusCircle } from "react-icons/fa";
import Button from "../Button";

const Book = (props) => {
  const { book } = props;

  const [isFav, setFavorite] = useState(book.isFav);
  const [read, setRead] = useState(book.read);

  const handleSetRead = () => {
    book.read = !book.read;
    setRead(book.read);
  };

  const handleSetFavorite = () => {
    book.isFav = !book.isFav;
    setFavorite(book.isFav);
  };

  // const handleSetFavorite = () => {
  //   book.isFav? setFavorite(!book.isFav) : setFavorite(book.isFav);
  // };

  return (
    <div className="Book">
      <h3>{book.title}</h3>
      <img src={book.thumbnailUrl} alt="lecture"></img>
      <p className="BookDescription">{book.shortDescription}</p>
      <Button
        onClick={handleSetFavorite}
        text={book.isFav ? "Je dé-favorise " : "Je favorise "}
        icon={<FaHeart />}
      />
      <Button
        onClick={handleSetRead}
        text={book.read ? "Je ne souhaite plus " : "Je souhaite "}
        icon={<FaPlusCircle />}
      />
    </div>
  );
};

export default Book
