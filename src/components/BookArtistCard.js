import React from "react";

const BookArtistCard = ({ props }) => {
  const { photo, name, proffesion } = props;
  return (
    <div className="card  bg-base-100 grid justify-center   ">
      <img src={photo} alt="someImage" height={200} width={200} />
      <div className="card-body   relative bottom-20 sm:top- text-white font-bold  text-center md:text-sm ">
        <div className="text-center mb-1">
          <h1 className="card-title text-lg    sm:text-xs">{name}</h1>
          <h1 className="card-title text-sm md:text-sm sm:text-xs">
            {proffesion}
          </h1>
        </div>
        <div className=" justify-center ">
          <button className="  lg:text-xl  md:text-lg sm:text-xs bg-red-600  hover:bg-red-400 lg:py-2 py-2 sm:py-0 md:py-1 lg:px-4 px-6 md:px-6 rounded-md  border-2 border-gray-300 ">
            Book Artist
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookArtistCard;
// sm:-top-14
//  bg-violet-800  hover:bg-violet-900
