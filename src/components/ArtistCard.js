import React from "react";
import Image from "next/image";

const ArtistCard = ({ props }) => {
  const { photo, name, profession } = props;
  return (
    // card-body items-center text-center

    <div class=" flex flex-col  justify-center items-center space-y-3 card  max-w-sm  bg-base-100  ">
      <figure>
        <img
          src={photo}
          className="rounded-xl bg-gray-500  fill h-[262] w-[244]"
          alt="someImage"
        />
      </figure>
      <div>
        <h1 class="card-title text-xl sm:text-lg lg:text-xl text-center font-bold">
          {name}
        </h1>
      </div>
      <div class="card-title text-xl">
        <p>{profession}</p>
      </div>

      <div class="m-4 pb-3">
        <button class="bg-transparent hover:bg-gray-900 text-black-700 font-semibold hover:text-white py-2 px-6 border border-gray-900 hover:border-transparent rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;
