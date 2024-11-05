import { useEffect, useState } from "react";
import { getStoredReadList, getStoredWishList } from "../utilities/addToDB";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortBy, setSortBy] = useState("");

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

  const handleSort = (sortType) => {
    // Sorting in a descending order (bigger to smaller)
    setSortBy(sortType);
    if (sortType === "Ratings") {
      // Sorting read list
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);

      // Sorting Wish list
      const sortedWishList = [...wishList].sort((a, b) => b.rating - a.rating);
      setWishList(sortedWishList);
    } else if (sortType === "Number of pages") {
      const sortedReadList = [...readList].sort((a, b) => b.totalPages - a.totalPages);
      setReadList(sortedReadList);

      // Sorting Wish list
      const sortedWishList = [...wishList].sort((a, b) => b.totalPages - a.totalPages);
      setWishList(sortedWishList);
    } else if (sortType === "Published Year") {
      const sortedReadList = [...readList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setReadList(sortedReadList);

      // Sorting Wish list
      const sortedWishList = [...wishList].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setWishList(sortedWishList);
    }
  };

  return (
    <div>
      {/* Sort Button  */}
      <div className="dropdown mb-5 z-10">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By {sortBy ? `${sortBy}` : ""}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => handleSort("Ratings")}>Ratings</a>
          </li>
          <li>
            <a onClick={() => handleSort("Number of pages")}>Number of pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("Published Year")}>Published Year</a>
          </li>
        </ul>
      </div>
      {/* Sort button end */}
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
    </div>
  );
};

export default ListedBooks;
