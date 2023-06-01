import React from "react";
import Image from "next/image";
import someImage from "../../public/teamPhoto.png";

const TeammemberCard = ({ props }) => {
    const { image, profession, name } = props;
    return (
        <div className='card  bg-base-100 grid justify-center image-full  '>
            <img src={image} alt={image} />

            <div className='card-body   relative -top-20 sm:-top-14 text-white font-bold  text-center md:text-sm '>
                <div className='text-center'>
                    <h1 className='card-title text-lg md:text-sm lg:text-lg text-center sm:text-xs mb-4'>
                        {profession}
                    </h1>
                </div>
                <div className=' justify-center '>
                    <button className='  lg:text-xl  md:text-sm sm:text-xs bg-violet-800  hover:bg-violet-900 lg:py-2 py-2 sm:py-0 md:py-1 lg:px-4 px-6 md:px-1 rounded-full  border-4 border-gray-200 '>
                        {name}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeammemberCard;

// className = "rounded-xl ";
