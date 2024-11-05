import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { author, bookName, category, image, tags, rating } = book;
  console.log(book);
  return (
    <div className="p-6 border rounded-2xl">
      {/* image */}
      <div className="h-80 flex flex-col place-content-center items-center bg-gray-100 rounded-2xl">
        <img src={image} alt="" className="w-32 object-cover" />
      </div>
      {/* tags  */}
      <span className="flex gap-4 my-4">
        {tags.map((tag) => (
          <p className="text-green-500 font-semibold bg-green-50 px-6 py-2 rounded-3xl">{tag}</p>
        ))}
      </span>
      {/* Title */}
      <h1 className="text-3xl font-bold">{bookName}</h1>
      {/* Author Name */}
      <h2 className="text-2xl font-medium my-5">By: {author}</h2>
      {/* divider  */}
      <div className="border border-dashed my-5"></div>
      {/* category & rating  */}
      <div className="flex items-center justify-between">
        <p className="text-xl">{category}</p>
        <div className="flex items-center gap-3">
          <p className="text-xl">{rating}</p>
          <FaStar />
        </div>
      </div>
    </div>
  );
};

export default Book;