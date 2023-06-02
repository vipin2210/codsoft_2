import React from "react";
import Breadcrum from "./Breadcrum";

const Header = ({ image, name, page }) => {
    return (
        <div className=''>
            <img
                className='object-fill  h-96 w-full'
                src={image}
                alt={image}
            />

            <Breadcrum name={name} page={page} />
        </div>
    );
};

export default Header;
