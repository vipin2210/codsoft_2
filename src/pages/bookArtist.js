import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

import { FaSearch } from "react-icons/fa";

const bookArtist = () => {
  return (
    // min-[320px]:
    <div>
      <Navbar />
      <div className="">
        <Header image="/Frame.png" name="BOOK ARTIST" page="Book Artist" />

        <div className=" relative  bottom-36  flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative border-4 rounded-full w-full sm:w-1/2   ">
            <input
              type="text"
              className="rounded-full h-14 w-full pr-8 pl-5 z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />

            <div className="absolute top-5 right-3">
              {/* <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> */}
              <FaSearch
                fa-2x
                className=" text-gray-400 z-20 hover:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <ScrollTop /> */}
    </div>
  );
};

export default bookArtist;
