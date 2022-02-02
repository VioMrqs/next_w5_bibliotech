import Book from "../Book";

const BooksList = ({data}) => {
  const booksList = data.books[0];

  return(  
  <div className="BookGrid">
    {booksList.map((e, index) => (
      <Book
        key={index}
        title={e.title}
        thumbnailUrl={e.thumbnailUrl}
        shortDescription={e.shortDescription}
      />
    ))};
  </div>
  )
};

export default BooksList;
