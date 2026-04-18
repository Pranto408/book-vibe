import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from "../../context/BookContext";
import BookCard from "../ui/BookCard";

const WishList = ({sortingType}) => {
  const { wishlist } = useContext(BookContext);
  
  const [filteredWishList, setFilteredWishList] = useState(wishlist)
  
  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishlist].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFilteredWishList(sortedData)
        
      }
      else if (sortingType === "ratings") {
        const sortedData = [...wishlist].sort((a, b) => a.rating - b.rating);
        setFilteredWishList(sortedData);
      }
    }
  },[sortingType,wishlist])

    if (filteredWishList.length === 0) {
      return (
        <div className="w-10/12 mx-auto h-[70vh] flex justify-center items-center m-10 rounded-2xl bg-slate-300 ">
          <h2 className="text-4xl font-bold text-red-400">No Book Found</h2>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    );
};

export default WishList;