import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const ArtistCarsoul = () => {
    return (
        <Glider
            className='glider-container p-8  '
            // draggable
            scrollPropagate
            hasArrows
            //hasDots
            // itemWidth={24}
            slidesToShow={1}
            rewind
            exactWidth
            draggable={true}
        >
            <img
                class='sm:h-56 sm:w-56 w-48 h-48 sm:mx-12 my-2 rounded-full  border-black border-2 '
                src='/Artist.jpeg'
                alt='user image'
            />
        </Glider>
    );
};

export default ArtistCarsoul;
