import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
  getAllWishListFromLocalDB,
  addWishListToLocalDB,
} from "../utils/localDB";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readlist, setReadlist] = useState(() => getAllReadListFromLocalDB());
  const [wishlist, setWishlist] = useState(() => getAllWishListFromLocalDB());

  const handleMarkAsRead = (currentBook) => {
    addReadListToLocalDB(currentBook)
    const isExistInWishList = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInWishList) {
      toast.error(`${currentBook.bookName} is in Wish List`);
    } else {
      const isExistBook = readlist.find(
        (book) => book.bookId === currentBook.bookId,
      );
      if (isExistBook) {
        toast.error(`${currentBook.bookName} is already marked as read`);
      } else {
          addReadListToLocalDB(currentBook);
        toast.success(`${currentBook.bookName} is marked as read`);
        setReadlist([...readlist, currentBook]);
      }
    }
  };

  const handleWishlist = (currentBook) => {
    const isExistInReadList = readlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error(`${currentBook.bookName} is in Read List`);
    } else {
      const isExistBook = wishlist.find(
        (book) => book.bookId === currentBook.bookId,
      );
      if (isExistBook) {
        toast.error(`${currentBook.bookName} is already in Wishlist`);
      } else {
        addWishListToLocalDB(currentBook);
        toast.success(`${currentBook.bookName} is added in Wishlist`);
        setWishlist([...wishlist, currentBook]);
      }
    }
  };

  const data = {
    readlist,
    setReadlist,
    handleMarkAsRead,
    handleWishlist,
    setWishlist,
    wishlist,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
