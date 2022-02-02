import { useState } from "react";
import { FaHeart, FaPlusCircle } from "react-icons/fa";

const Book = ({ title, thumbnailUrl, shortDescription }) => {

const [favorite, setFavorite] = useState(false);
const [wish, setWish] = useState(false);

const handleSetWish = () => {
  (wish === true)? setWish(false) : setWish(true);
}

const handleSetFavorite = () => {
  favorite === true ? setFavorite(false) : setFavorite(true);
};

  return (
    <div className="Book">
      <h3>{title}</h3>
      <img src={thumbnailUrl} alt="lecture"></img>
      <p className="BookDescription">{shortDescription}</p>
      <button onClick={handleSetFavorite}>
        {favorite ? "Je dé-favorise " : "Je favorise "}
        <FaHeart />
      </button>
      <button onClick={handleSetWish}>
        {wish ? "Je ne souhaite plus " : "Je souhaite "}
        <FaPlusCircle />
      </button>
    </div>
  );
};

export default Book
