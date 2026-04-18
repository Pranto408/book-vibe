import React, { use } from 'react';
import BookCard from '../ui/BookCard';
const booksPromise=fetch("/booksData.json").then(res=>res.json())
const AllBooks = () => {
    const books = use(booksPromise)
    return (
      <div className="w-11/12 mx-auto">
        <div className="text-center mt-10">
          <h2 className="text-4xl font-bold">Books</h2>
        </div>
        <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {books.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    );
};

export default AllBooks;