import React from "react";
import Image from "next/image";
import someImage from "../../public/artist.png";

const ArtistCard = () => {
  return (
    // card-body items-center text-center
    
      <div class=" flex flex-col justify-center items-center space-y-3 card  max-w-sm bg-base-100 ">
        <figure class=" pt-3">
          <Image src={someImage} className="rounded-xl " />
        </figure>
        <div>
          <h1 class="card-title text-2xl font-bold">Bob Carnagy</h1>
        </div>
        <div class="card-title text-xl">
          <p>ACTOR</p>
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
