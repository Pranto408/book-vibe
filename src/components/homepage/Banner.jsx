import React from 'react';
import HeroBook from "../../assets/hero_book.png"
const Banner = () => {

    return (
      <div className="w-11/12 mx-auto hero bg-base-300 min-h-[70vh] my-10 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-20">
          <img src={HeroBook} className="max-w-sm rounded-lg" />
          <div className="space-y-10">
            <h1 className="text-5xl font-bold leading-15">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;