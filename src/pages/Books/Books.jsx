import React, { useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from '../../components/listedBooks/ReadList';
import WishList from '../../components/listedBooks/WishList';
import { FaSort } from 'react-icons/fa';

const Books = () => {
  const [sortingType, setSortingType] = useState("");
 console.log(sortingType);
  
  return (
    <>
      <div className="w-10/12  mx-auto h-[10vh] flex justify-center items-center m-10 rounded-2xl bg-base-300 ">
        <h2 className="text-2xl font-bold">Books</h2>
      </div>

      <div className="flex my-4 justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By <FaSort />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("ratings")}>
              <a>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <Tabs>
          <TabList>
            <Tab>Read List Books</Tab>
            <Tab>Wish List Books</Tab>
          </TabList>

          <TabPanel>
            <ReadList sortingType={sortingType} />
          </TabPanel>
          <TabPanel>
            <WishList sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
      
};

export default Books;