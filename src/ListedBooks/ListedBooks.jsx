import { useEffect, useState } from "react";
import { getStoredReadList, getStoredWishList } from "../utilities/addToDB";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedBooksWishList = getStoredWishList();

    // worst way to get data. But for the demonstration purpose here, we are doing it.
    const readBookList = allBooks.filter((book) => storedReadList.includes(book.bookId));
    const booksWishList = allBooks.filter((book) => storedBooksWishList.includes(book.bookId));
    setReadList(readBookList);
    setWishList(booksWishList);
  }, []);

  return (
    <div role="tablist" className="tabs tabs-lifted">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab"
        aria-label="Read Books"
        defaultChecked
        style={{ width: "110px" }}
      />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        {/* Tab: Read Book List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>

      <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" />
      <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Tab: Book Wishlist */}
          {wishList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
