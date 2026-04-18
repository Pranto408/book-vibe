import React from 'react';
import { Star } from "lucide-react";
import { Link } from 'react-router';
const BookCard = ({book}) => {
    return (
      <Link to={`/bookDetails/${book.bookId}`}>
        <div className="card bg-base-100 w-full shadow-sm p-6 h-full">
          <figure className="bg-base-300 rounded-2xl py-6 mb-6">
            <img className="h-50" src={book.image} alt={book.bookName} />
          </figure>
          <div className="card-body p-0">
            <div className="space-x-4">
              {book.tags.map((tag, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-success border-none font-medium bg-[#23BE0A20] rounded-full p-3"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="border-b-2 border-dashed border-[#13131320] py-5 space-y-2 ">
              <h2 className="card-title text-2xl">{book.bookName}</h2>
              <p className="font-medium text-gray-600 text-lg">
                By : {book.author}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <p className="font-medium text-gray-600 text-lg grow-0">
                {book.category}
              </p>
              <p className="flex items-center gap-1 font-medium text-gray-600 text-lg grow-0">
                {book.rating} <Star size={18} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default BookCard;