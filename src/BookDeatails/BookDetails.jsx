import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../utilities/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const books = useLoaderData();
  const currentBook = books.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearsOfPublishing,
  } = currentBook;
  console.log(currentBook);

  const handleMarkAsRead = (id) => {
    /**
     * 1. Understand what to store or save: => bookId
     * 2. Where to store: database
     * 3. Array, List, collection
     * 4. Check if the book is already exist in the read list
     * 5. If no, then add the book to the readList
     * 6. If yes, then do not add the bookId to the read list
     */
    addToStoredReadList(id);
  };

  const handleAddToWishlist = (id) => {
    addToWishList(id);
  };

  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row justify-between gap-12">
        <div className="p-20 bg-gray-50 rounded-3xl">
          <img src={image} className="max-w-96 mx-auto rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="pt-6">By: {author}</p>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>
            <span className="font-bold">Review</span>: {review}
          </p>
          <div className="flex gap-5 pt-5 items-center">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, i) => (
              <button
                key={i}
                className="bg-gray-50 font-medium px-6 py-3 rounded-3xl text-green-600"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <p className="mt-3">Number of pages: {totalPages}</p>
          <p className="mt-3">Publisher: {publisher}</p>
          <p className="mt-3">Year of publishing: {yearsOfPublishing}</p>
          <p className="mt-3">Rating: {rating}</p>
          <div className="flex items-center gap-4 mt-5">
            <button
              className="btn border bg-transparent px-6"
              onClick={() => handleMarkAsRead(currentBookId)}
            >
              Mark as read
            </button>
            <button
              className="btn bg-[#50B1C9] text-white px-6"
              onClick={() => handleAddToWishlist(currentBookId)}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
