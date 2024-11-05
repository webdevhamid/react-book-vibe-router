import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { BeatLoader } from "react-spinners";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-20">
      <h2 className="text-5xl text-center font-bold mb-8">Books</h2>
      <div className="text-center">{loading && <BeatLoader />}</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-between">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
