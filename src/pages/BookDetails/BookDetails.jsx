import { useContext} from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';
const BookDetails = () => {
    const {id} = useParams()
    const books = useLoaderData()
    const expectedBook = books.find((book) => book.bookId == id);

const { handleMarkAsRead } = useContext(BookContext);
const { handleWishlist } = useContext(BookContext);

    return (
      <div className="card lg:card-side bg-base-100 w-11/12 mx-auto my-10">
        <figure className="bg-[#F3F3F3] rounded-2xl p-10 flex-1">
          <img
            className="w-full h-auto max-h-75 lg:max-h-125 object-contain mx-auto"
            src={expectedBook.image}
            alt={expectedBook.bookName}
          />
        </figure>
        <div className="px-10 flex-2 flex flex-col justify-center">
          <div className="py-4 border-b-2 border-gray-400 space-y-1">
            <h2 className="text-4xl font-bold ">{expectedBook.bookName}</h2>
            <p className="font-medium text-gray-600 text-lg">
              by : {expectedBook.author}
            </p>
          </div>
          <p className="font-medium text-gray-600 text-lg py-1 border-b-2 border-gray-400">
            {expectedBook.category}
          </p>
          <p className="py-2 text-[#13131390]">
            <span className="font-semibold text-black">Review :</span>{" "}
            {expectedBook.review}
          </p>
          <div className="mb-3">
            <span className="font-semibold">Tag</span>
            {expectedBook.tags.map((tag, index) => (
              <div
                key={index}
                className="badge ml-3  badge-outline badge-success border-none font-medium bg-[#23BE0A20] rounded-full p-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="space-y-3 py-4 border-t-2 border-gray-400">
            <div className="grid grid-cols-[180px_1fr] gap-y-3">
              <span className="text-[#13131390]">Number of Pages:</span>
              <span className="font-bold text-[#131313]">
                {expectedBook.totalPages}
              </span>

              <span className="text-[#13131390]">Publisher:</span>
              <span className="font-bold text-[#131313]">
                {expectedBook.publisher}
              </span>

              <span className="text-[#13131390]">Year of Publishing:</span>
              <span className="font-bold text-[#131313]">
                {expectedBook.yearOfPublishing}
              </span>

              <span className="text-[#13131390]">Rating:</span>
              <span className="font-bold text-[#131313]">
                {expectedBook.rating}
              </span>
            </div>
          </div>
          <div className="card-actions space-x-3">
            <button
              onClick={() => handleMarkAsRead(expectedBook)}
              className="btn btn-outline"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishlist(expectedBook)}
              className="btn btn-accent text-white"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;