import React from "react";
import Image from "next/image";
import someImage from "../../public/teamPhoto.png";

const TeammemberCard = () => {
  return (
    <div className="card  bg-base-100 image-full m-3">
      <figure className=" relative">
        <Image src={someImage} />

        <div className="card-body items-center  absolute left-6 -bottom-4 text-white font-bold ">
          <div className="text-center">
            <h1 className="card-title text-xl mb-4">Video Editor</h1>
          </div>
          <div className=" justify-end ">
            <button className=" text-xl bg-violet-800  hover:bg-violet-900 py-2 px-4 rounded-full  border-4 border-gray-200 ">
              Prateek Saxena
            </button>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default TeammemberCard;

// className = "rounded-xl ";
